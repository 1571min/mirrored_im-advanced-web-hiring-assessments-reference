const { user } = require('./models');
module.exports = {
  signInController: (req, res) => {
    // TODO : 로그인 및 인증 부여 로직 작성
    const { email, password } = req.body;
    const sess = req.session;

    user
      .findOne({
        where: {
          email: email,
          password: password
        }
      })
      .then(data => {
        if (!data) {
          return res.status(404).send('unvalid user');
        }
        sess.userid = data.id;
        res.status(200).json({
          id: data.id
        });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  },
  signUpController: (req, res) => {
    // TODO : 회원가입 로직 및 유저 생성 로직 작성
    const { email, password, username, mobile } = req.body;

    user
      .findOrCreate({
        where: {
          email: email
        },
        defaults: {
          password: password,
          username: username,
          mobile: mobile
        }
      })
      .then(async ([user, created]) => {
        if (!created) {
          return res.status(409).send('email exists');
        }
        const data = await user.get({ plain: true });
        res.status(201).json(data);
      });
  },
  userContoroller: (req, res) => {
    // TODO : 유저 회원정보 요청 로직 작성
    const sess = req.session;
    if (sess.userid) {
      user
        .findOne({
          where: {
            id: sess.userid
          }
        })
        .then(data => {
          if (data) {
            return res.status(200).json(data);
          }
          res.sendStatus(204);
        })
        .catch(err => {
          console.log(err);
          res.sendStatus(500);
        });
    } else {
      res.status(401).send('Not found Session');
    }
  }
};
