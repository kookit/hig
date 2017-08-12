

import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNav from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNav from './TopNav';
import ProfileComponent from '../../../../adapters/ProfileAdapter';
import Search from '../../../../adapters/SearchAdapter';

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <Search
          placeholder={props.placeholder}
          query={props.query}
          onInput={props.onInput}
          onFocusIn={props.onFocusIn}
          onFocusOut={props.onFocusOut}
        />
      </TopNav>
    </GlobalNav>
  );
};

describe('<TopNav>', () => {
  function createHigNav() {
    const domContainer = document.createElement('div');
    const higNav = new HIG.GlobalNav();
    higNav.mount(domContainer);

    return { higNav, domContainer };
  }

  function createTopNav() {
    const { higNav, domContainer } = createHigNav();
    const topNav = new higNav.partials.TopNav({ ...defaults });
    higNav.addTopNav(topNav);
    return { topNav, higNav, domContainer };
  }

  // Create the GlobalNav context for the TopNav to be attached to
  let defaults = {
    logo: '../../../bim-logo.png',
    logoLink: 'http://www.autodesk.com'
  };
  let profileDefaults = { image: '../../../bim-logo.png' };

  it('renders a topnav', () => {
    const reactContainer = document.createElement('div');

    mount(
      <GlobalNav>
        <TopNav {...defaults}>
          <ProfileComponent {...profileDefaults} />
        </TopNav>
      </GlobalNav>,
      { attachTo: reactContainer }
    );
    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();
  });

  it('can render a Profile', () => {
    const { topNav, higNav, domContainer } = createTopNav();

    const profile = new topNav.partials.Profile({ ...profileDefaults });
    topNav.addProfile(profile);

    const reactContainer = document.createElement('div');
    mount(
      <GlobalNav>
        <GlobalNav.TopNav {...defaults}>
          <ProfileComponent {...profileDefaults} />
        </GlobalNav.TopNav>
      </GlobalNav>,
      { attachTo: reactContainer }
    );

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      domContainer.firstElementChild.outerHTML
    );
  });

  function anyHandler() {
    return true;
  }

  it('can render Search programmatically', () => {
    const { topNav, higNav, domContainer } = createTopNav();
    const props = {
      placeholder: 'enter some text',
      query: 'foobar',
      onInput: anyHandler,
      onFocusIn: anyHandler,
      onFocusOut: anyHandler
    };
    const tnsearch = new topNav.partials.Search(props);
    topNav.addSearch(tnsearch);

    expect(domContainer.firstChild.outerHTML).toMatchSnapshot();
    const elems = domContainer.getElementsByClassName(
      'hig__global-nav__top-nav__search__inputholder__input'
    );
    expect(elems.length).toEqual(1);
  });

  it('can render Search through React-like components', () => {
    const reactContainer = document.createElement('div');
    const props = {
      placeholder: 'enter some text',
      query: 'foobar',
      onInput: anyHandler,
      onFocusIn: anyHandler,
      onFocusOut: anyHandler
    };

    mount(Context(props), { attachTo: reactContainer });
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

    const elems = reactContainer.getElementsByClassName(
      'hig__global-nav__top-nav__search__inputholder__input'
    );
    expect(elems.length).toEqual(1);
  });
});