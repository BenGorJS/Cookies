/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export function create(name, value, expirationDays) {
  const date = new Date();
  let expires = 'expires=';

  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  expires += date.toGMTString();
  document.cookie = `${name}=${value};${expires};${location.hostname.split('.').reverse()[1]}.${
    location.hostname.split('.').reverse()[0]
  }; path=/`;
}

export function get(name) {
  const cookies = document.cookie.split(';');
  let index = cookies.length;
  let cookie = '';

  name = `${name}=`;
  while (index--) {
    cookie = cookies[index];

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (parseInt(cookie.indexOf(name), 10) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return false;
}
