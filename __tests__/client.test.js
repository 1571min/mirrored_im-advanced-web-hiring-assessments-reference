import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'; // ES6
import 'babel-polyfill';

import { Mypage } from '../client/src/pages/Mypage';

describe('Advanced Web Hiring Assessments - Client', () => {
  const mockedUser = {
    email: 'coding.kim@codestates.com',
    username: '김코딩',
    mobile: '010-1523-2342'
  };

  describe('Mypage test', () => {
    let container;
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });

    test('it should render user information if login', () => {
      act(() => {
        ReactDOM.render(
          <Mypage isLogin={true} userinfo={mockedUser} />,
          container
        );
      });

      expect(container.querySelector('h1').innerHTML).toBe('Mypage');
      expect(container.querySelector('.username').innerHTML).toBe('김코딩');
      expect(container.querySelector('.email').innerHTML).toBe(
        'coding.kim@codestates.com'
      );
      expect(container.querySelector('.mobile').innerHTML).toBe(
        '010-1523-2342'
      );
    });

    test('it should not render user information if not login', () => {
      act(() => {
        ReactDOM.render(
          <Mypage isLogin={false} userinfo={mockedUser} />,
          container
        );
      });

      expect(container.querySelector('h1').innerHTML).toBe('NOT FOUND');
      expect(container.querySelector('.username')).toBeNull();
      expect(container.querySelector('.email')).toBeNull();
      expect(container.querySelector('.mobile')).toBeNull();
    });
  });
});
