



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-620f1e0d60961f8af56923220f643c803445b5ec06eb2fe64791223c4c05b1f9.css" integrity="sha256-Yg8eDWCWH4r1aSMiD2Q8gDRFtewG6y/mR5EiPEwFsfk=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-3df6c7fd997170ee5165efcca53d5b5948b150dd0cebbc40c3625bb09d4f87f0.css" integrity="sha256-PfbH/ZlxcO5RZe/MpT1bWUixUN0M67xAw2JbsJ1Ph/A=" media="all" rel="stylesheet" />
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-583e60ce2e02e76386a01b37fd5b18958df25f56292146954c46b3bbc7890e89.js" rel="preload" />
    <link as="script" href="https://assets-cdn.github.com/assets/github-910b8ed42961f90aef32a6ed2636e33e7b7abcf4e17bd8ce20411795f43c6474.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jbake.org/prettify.js at master · jbake-org/jbake.org</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/5236856?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jbake-org/jbake.org" name="twitter:title" /><meta content="Contents behind the http://jbake.org web site" name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/5236856?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="jbake-org/jbake.org" property="og:title" /><meta content="https://github.com/jbake-org/jbake.org" property="og:url" /><meta content="Contents behind the http://jbake.org web site" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NDY2NjA5OjBlNjAyNmUwYzA1MjEzOTY4YWExMjVkYWY2Mjg4YzZiOjA5NmNlODNiMTU2OWNmMGUwYzRkMDg4OTEyZmQ2M2FkZjZhMGIyYTAxMjEwYTRhY2Y0ZjIxZDdhZTc5NTU5OWI=--5629dd932852a6344bbdfcab3ef94d77535a1e92">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="5C49B8C8:56AC:4C1B25B:56D1E83A" name="octolytics-dimension-request_id" /><meta content="466609" name="octolytics-actor-id" /><meta content="danielgrycman" name="octolytics-actor-login" /><meta content="a714e01bbab61272ed0af9095f5db9627fba55b175229c12581ac19818ccbcca" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="danielgrycman">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="NDg3MmNmYmQwYWE1ZGVmZGMzZDk1NjQ1MTA4YjYyNGE0ZWJlZmE1NjEzNmUwYjk4MTk4M2M2MGNkNDE5MGMwZXx7InJlbW90ZV9hZGRyZXNzIjoiOTIuNzMuMTg0LjIwMCIsInJlcXVlc3RfaWQiOiI1QzQ5QjhDODo1NkFDOjRDMUIyNUI6NTZEMUU4M0EifQ==">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="f92b7126c564cce425bd1afdae1648699f3df367" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="07b0c04bb2d53e750ad27e76a2e32b97">
    

      
  <meta name="description" content="Contents behind the http://jbake.org web site">
  <meta name="go-import" content="github.com/jbake-org/jbake.org git https://github.com/jbake-org/jbake.org.git">

  <meta content="5236856" name="octolytics-dimension-user_id" /><meta content="jbake-org" name="octolytics-dimension-user_login" /><meta content="8752310" name="octolytics-dimension-repository_id" /><meta content="jbake-org/jbake.org" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8752310" name="octolytics-dimension-repository_network_root_id" /><meta content="jbake-org/jbake.org" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jbake-org/jbake.org/commits/master.atom" rel="alternate" title="Recent Commits to jbake.org:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/jbake-org/jbake.org/blob/master/assets/js/prettify.js" data-pjax-transient>
  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" role="img" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jbake-org/jbake.org/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/jbake-org/jbake.org/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:danielgrycman"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <svg aria-hidden="true" class="octicon octicon-bell" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="jbake-org/jbake.org">This repository</span>
  </div>
    <a class="dropdown-item" href="/jbake-org/jbake.org/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/danielgrycman"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@danielgrycman" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/466609?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">danielgrycman</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/danielgrycman" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="f92b7126c564cce425bd1afdae1648699f3df367" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="o74/2DXiREw6YaI1jb2Hs1kZEkeWR2vEa3RRa8NwC+tOjNmVqvYZlHA492ayjxOzvMT/fvu7ReOApTtKmEO7aQ==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="f92b7126c564cce425bd1afdae1648699f3df367" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="JR8aVM00ERYZ9vY6Q3dXJvLRWZDJc8GEJPVp23ams1FFLxenYWHAr9tMcqXE0RQy20Rw0gGIgk5JiHchbfLZiw==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="8752310" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/jbake-org/jbake.org/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/jbake-org/jbake.org/watchers">
            3
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jbake-org/jbake.org/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="f92b7126c564cce425bd1afdae1648699f3df367" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="2EmIMXGC5oW4gX4QldTEU8GrNONzY0H3PKxbQzhhqkxwAJEeC1sTVx2ANxlft5PdKc2Drwxk5yqDDlBDfjcHlg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jbake-org/jbake.org"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jbake-org/jbake.org/stargazers">
          5
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jbake-org/jbake.org/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="f92b7126c564cce425bd1afdae1648699f3df367" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yUn6pcFJAoI63tdmWtKqjVKmRvrvbS/AyYNuYA4NOykvm/VpWN+FqS4fbt62IibDOWViaUd1x+IQNFl5QGiMVQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jbake-org/jbake.org"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/jbake-org/jbake.org/stargazers">
          5
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of jbake-org/jbake.org to your account"
              aria-label="Fork your own copy of jbake-org/jbake.org to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" role="img" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/jbake-org/jbake.org/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/jbake-org/jbake.org/network" class="social-count">
      18
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/jbake-org" class="url fn" rel="author">jbake-org</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/jbake-org/jbake.org" data-pjax="#js-repo-pjax-container">jbake.org</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jbake-org/jbake.org" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jbake-org/jbake.org" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/jbake-org/jbake.org/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jbake-org/jbake.org/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">9</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jbake-org/jbake.org/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /jbake-org/jbake.org/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/jbake-org/jbake.org/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jbake-org/jbake.org/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>
  <a href="/jbake-org/jbake.org/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /jbake-org/jbake.org/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/jbake-org/jbake.org/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /jbake-org/jbake.org/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/jbake-org/jbake.org/blob/b0119fbc8fd9b0e3613b88813d8ad5078c05f51d/assets/js/prettify.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:fa4929439b8955a0249373262083eea7 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jbake-org/jbake.org/blob/master/assets/js/prettify.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jbake-org/jbake.org/blob/update-for-v2.2-release/assets/js/prettify.js"
               data-name="update-for-v2.2-release"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="update-for-v2.2-release">
                update-for-v2.2-release
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/jbake-org/jbake.org/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/jbake-org/jbake.org"><span>jbake.org</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/jbake-org/jbake.org/tree/master/assets"><span>assets</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/jbake-org/jbake.org/tree/master/assets/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">prettify.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/jbake-org/jbake.org/contributors/master/assets/js/prettify.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/jbake-org/jbake.org/raw/master/assets/js/prettify.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/jbake-org/jbake.org/blame/master/assets/js/prettify.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/jbake-org/jbake.org/commits/master/assets/js/prettify.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/jbake-org/jbake.org?branch=master&amp;filepath=assets%2Fjs%2Fprettify.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jbake-org/jbake.org/edit/master/assets/js/prettify.js" class="inline-form js-update-url-with-hash" data-form-nonce="f92b7126c564cce425bd1afdae1648699f3df367" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eMenK+AcVohK69dRjY6Km0QFDejE5g8PbSZIXB0LFQ1O7POg2I/3H17XfoDJGRnkW+yAy1KZZ2pIwyMWSlM5Gw==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit the file in your fork of this project" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jbake-org/jbake.org/delete/master/assets/js/prettify.js" class="inline-form" data-form-nonce="f92b7126c564cce425bd1afdae1648699f3df367" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SP+y3s4Ibdlydb1hbwQrv9o/+1sEiAjisZqnnX7ZnrhmbIHQrXEVDt5npFATFXMMtvoqGotga3T1dk7Nmuj+CQ==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete the file in your fork of this project" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      31 lines (30 sloc)
      <span class="file-info-divider"></span>
    14.2 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">!</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> q<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-c1">window</span>.<span class="pl-c1">PR_SHOULD_USE_CONTINUATION</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(){<span class="pl-k">function</span> <span class="pl-en">S</span>(<span class="pl-smi">a</span>){<span class="pl-k">function</span> <span class="pl-en">d</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);<span class="pl-k">if</span>(b<span class="pl-k">!==</span><span class="pl-c1">92</span>)<span class="pl-k">return</span> b;<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">1</span>);<span class="pl-k">return</span>(b<span class="pl-k">=</span>r[a])<span class="pl-k">?</span>b<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span><span class="pl-k">&lt;=</span>a<span class="pl-k">&amp;&amp;</span>a<span class="pl-k">&lt;=</span><span class="pl-s"><span class="pl-pds">&quot;</span>7<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">e</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>),<span class="pl-c1">8</span>)<span class="pl-k">:</span>a<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>u<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>a<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-c1">parseInt</span>(<span class="pl-smi">e</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">2</span>),<span class="pl-c1">16</span>)<span class="pl-k">:</span><span class="pl-smi">e</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">1</span>)}<span class="pl-k">function</span> <span class="pl-en">g</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(e<span class="pl-k">&lt;</span><span class="pl-c1">32</span>)<span class="pl-k">return</span>(e<span class="pl-k">&lt;</span><span class="pl-c1">16</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>x0<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>x<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-smi">e</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>);e<span class="pl-k">=</span><span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(e);<span class="pl-k">return</span> e<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>e<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>e<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>e<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>e<span class="pl-k">:</span>e}<span class="pl-k">function</span> <span class="pl-en">b</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>,<span class="pl-smi">e</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>).<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span>u<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">A-Fa-f</span>]</span><span class="pl-k">{4}</span><span class="pl-k">|</span><span class="pl-cce">\\</span>x<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">A-Fa-f</span>]</span><span class="pl-k">{2}</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">0-3</span>][<span class="pl-c1">0-7</span>]</span><span class="pl-k">{0,2}</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">0-7</span>]</span><span class="pl-k">{1,2}</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\</span>]</span><span class="pl-pds">/</span>g</span>),e<span class="pl-k">=</span>[],a<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">b[<span class="pl-c1">0</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span>,c<span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span>];a<span class="pl-k">&amp;&amp;</span><span class="pl-smi">c</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span>a<span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">0</span>,f<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>;a<span class="pl-k">&lt;</span>f;<span class="pl-k">++</span>a){<span class="pl-k">var</span> h<span class="pl-k">=</span>b[a];<span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span><span class="pl-c1">[bdsw]</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(h))<span class="pl-smi">c</span>.<span class="pl-c1">push</span>(h);<span class="pl-k">else</span>{<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-en">d</span>(h),l;a<span class="pl-k">+</span><span class="pl-c1">2</span><span class="pl-k">&lt;</span>f<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>b[a<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">?</span>(l<span class="pl-k">=</span><span class="pl-en">d</span>(b[a<span class="pl-k">+</span><span class="pl-c1">2</span>]),a<span class="pl-k">+=</span><span class="pl-c1">2</span>)<span class="pl-k">:</span>l<span class="pl-k">=</span>h;<span class="pl-smi">e</span>.<span class="pl-c1">push</span>([h,l]);l<span class="pl-k">&lt;</span><span class="pl-c1">65</span><span class="pl-k">||</span>h<span class="pl-k">&gt;</span><span class="pl-c1">122</span><span class="pl-k">||</span>(l<span class="pl-k">&lt;</span><span class="pl-c1">65</span><span class="pl-k">||</span>h<span class="pl-k">&gt;</span><span class="pl-c1">90</span><span class="pl-k">||</span><span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">65</span>,h)<span class="pl-k">|</span><span class="pl-c1">32</span>,<span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(l,<span class="pl-c1">90</span>)<span class="pl-k">|</span><span class="pl-c1">32</span>]),l<span class="pl-k">&lt;</span><span class="pl-c1">97</span><span class="pl-k">||</span>h<span class="pl-k">&gt;</span><span class="pl-c1">122</span><span class="pl-k">||</span><span class="pl-smi">e</span>.<span class="pl-c1">push</span>([<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">97</span>,h)<span class="pl-k">&amp;</span><span class="pl-k">-</span><span class="pl-c1">33</span>,<span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(l,<span class="pl-c1">122</span>)<span class="pl-k">&amp;</span><span class="pl-k">-</span><span class="pl-c1">33</span>]))}}<span class="pl-smi">e</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>,<span class="pl-smi">a</span>){<span class="pl-k">return</span> e[<span class="pl-c1">0</span>]<span class="pl-k">-</span>a[<span class="pl-c1">0</span>]<span class="pl-k">||</span>a[<span class="pl-c1">1</span>]<span class="pl-k">-</span>e[<span class="pl-c1">1</span>]});b<span class="pl-k">=</span>[];f<span class="pl-k">=</span>[];<span class="pl-k">for</span>(a<span class="pl-k">=</span><span class="pl-c1">0</span>;a<span class="pl-k">&lt;</span><span class="pl-smi">e</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>a)h<span class="pl-k">=</span>e[a],h[<span class="pl-c1">0</span>]<span class="pl-k">&lt;=</span>f[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">?</span>f[<span class="pl-c1">1</span>]<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(f[<span class="pl-c1">1</span>],h[<span class="pl-c1">1</span>])<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-c1">push</span>(f<span class="pl-k">=</span>h);<span class="pl-k">for</span>(a<span class="pl-k">=</span><span class="pl-c1">0</span>;a<span class="pl-k">&lt;</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>a)h<span class="pl-k">=</span>b[a],<span class="pl-smi">c</span>.<span class="pl-c1">push</span>(<span class="pl-en">g</span>(h[<span class="pl-c1">0</span>])),</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">h[<span class="pl-c1">1</span>]<span class="pl-k">&gt;</span>h[<span class="pl-c1">0</span>]<span class="pl-k">&amp;&amp;</span>(h[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">&gt;</span>h[<span class="pl-c1">0</span>]<span class="pl-k">&amp;&amp;</span><span class="pl-smi">c</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>),<span class="pl-smi">c</span>.<span class="pl-c1">push</span>(<span class="pl-en">g</span>(h[<span class="pl-c1">1</span>])));<span class="pl-smi">c</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)}<span class="pl-k">function</span> <span class="pl-en">s</span>(<span class="pl-smi">e</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">source</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\[</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\\]</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span>)<span class="pl-k">*</span>]<span class="pl-k">|</span><span class="pl-cce">\\</span>u<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">A-Fa-f</span>]</span><span class="pl-k">{4}</span><span class="pl-k">|</span><span class="pl-cce">\\</span>x<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">A-Fa-f</span>]</span><span class="pl-k">{2}</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\d</span>ux]</span><span class="pl-k">|</span><span class="pl-cce">\(\?</span><span class="pl-c1">[!:=]</span><span class="pl-k">|</span><span class="pl-c1">[()^]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span>()[<span class="pl-cce">\\</span>^]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>),c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span>,d<span class="pl-k">=</span>[],f<span class="pl-k">=</span><span class="pl-c1">0</span>,h<span class="pl-k">=</span><span class="pl-c1">0</span>;f<span class="pl-k">&lt;</span>c;<span class="pl-k">++</span>f){<span class="pl-k">var</span> l<span class="pl-k">=</span>a[f];l<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-k">++</span>h<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">l</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)<span class="pl-k">&amp;&amp;</span>(l<span class="pl-k">=</span><span class="pl-k">+</span><span class="pl-smi">l</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>))<span class="pl-k">&amp;&amp;</span>(l<span class="pl-k">&lt;=</span>h<span class="pl-k">?</span>d[l]<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">:</span>a[f]<span class="pl-k">=</span><span class="pl-en">g</span>(l))}<span class="pl-k">for</span>(f<span class="pl-k">=</span><span class="pl-c1">1</span>;f<span class="pl-k">&lt;</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>f)<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span>d[f]<span class="pl-k">&amp;&amp;</span>(d[f]<span class="pl-k">=</span><span class="pl-k">++</span>x);<span class="pl-k">for</span>(h<span class="pl-k">=</span>f<span class="pl-k">=</span><span class="pl-c1">0</span>;f<span class="pl-k">&lt;</span>c;<span class="pl-k">++</span>f)l<span class="pl-k">=</span>a[f],l<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>(<span class="pl-k">++</span>h,d[h]<span class="pl-k">||</span>(a[f]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>(?:<span class="pl-pds">&quot;</span></span>))<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">l</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)<span class="pl-k">&amp;&amp;</span>(l<span class="pl-k">=</span><span class="pl-k">+</span><span class="pl-smi">l</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>))<span class="pl-k">&amp;&amp;</span>l<span class="pl-k">&lt;=</span>h<span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">(a[f]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d[l]);<span class="pl-k">for</span>(f<span class="pl-k">=</span><span class="pl-c1">0</span>;f<span class="pl-k">&lt;</span>c;<span class="pl-k">++</span>f)<span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>a[f]<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>a[f<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span>(a[f]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-c1">ignoreCase</span><span class="pl-k">&amp;&amp;</span>m)<span class="pl-k">for</span>(f<span class="pl-k">=</span><span class="pl-c1">0</span>;f<span class="pl-k">&lt;</span>c;<span class="pl-k">++</span>f)l<span class="pl-k">=</span>a[f],e<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>),<span class="pl-smi">l</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;=</span><span class="pl-c1">2</span><span class="pl-k">&amp;&amp;</span>e<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>a[f]<span class="pl-k">=</span><span class="pl-en">b</span>(l)<span class="pl-k">:</span>e<span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>(a[f]<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">A-Za-z</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>);<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(a<span class="pl-k">&amp;</span><span class="pl-k">-</span><span class="pl-c1">33</span>,a<span class="pl-k">|</span><span class="pl-c1">32</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>}));<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)}<span class="pl-k">for</span>(<span class="pl-k">var</span> x<span class="pl-k">=</span><span class="pl-c1">0</span>,m<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,j<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,k<span class="pl-k">=</span><span class="pl-c1">0</span>,c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span>;k<span class="pl-k">&lt;</span>c;<span class="pl-k">++</span>k){<span class="pl-k">var</span> i<span class="pl-k">=</span>a[k];<span class="pl-k">if</span>(<span class="pl-smi">i</span>.<span class="pl-c1">ignoreCase</span>)j<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(<span class="pl-smi">i</span>.<span class="pl-c1">source</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span>u<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">a-f</span>]</span><span class="pl-k">{4}</span><span class="pl-k">|</span><span class="pl-cce">\\</span>x<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">a-f</span>]</span><span class="pl-k">{2}</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-k">^</span>UXux]</span><span class="pl-pds">/</span>gi</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>))){m<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;j<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">break</span>}}<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span>{b<span class="pl-k">:</span><span class="pl-c1">8</span>,t<span class="pl-k">:</span><span class="pl-c1">9</span>,n<span class="pl-k">:</span><span class="pl-c1">10</span>,v<span class="pl-k">:</span><span class="pl-c1">11</span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">f<span class="pl-k">:</span><span class="pl-c1">12</span>,r<span class="pl-k">:</span><span class="pl-c1">13</span>},n<span class="pl-k">=</span>[],k<span class="pl-k">=</span><span class="pl-c1">0</span>,c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span>;k<span class="pl-k">&lt;</span>c;<span class="pl-k">++</span>k){i<span class="pl-k">=</span>a[k];<span class="pl-k">if</span>(<span class="pl-smi">i</span>.<span class="pl-c1">global</span><span class="pl-k">||</span><span class="pl-smi">i</span>.<span class="pl-c1">multiline</span>)<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>i);<span class="pl-smi">n</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(?:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-en">s</span>(i)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">return</span> <span class="pl-c1">RegExp</span>(<span class="pl-smi">n</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>),j<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>gi<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">function</span> <span class="pl-en">T</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>){<span class="pl-k">function</span> <span class="pl-en">g</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nodeType</span>;<span class="pl-k">if</span>(c<span class="pl-k">==</span><span class="pl-c1">1</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">b</span>.<span class="pl-c1">test</span>(<span class="pl-smi">a</span>.<span class="pl-c1">className</span>)){<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">firstChild</span>;c;c<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">nextSibling</span>)<span class="pl-en">g</span>(c);c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toLowerCase</span>();<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>br<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>c<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>li<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>c)s[j]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>,m[j<span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>x<span class="pl-k">++</span>,m[j<span class="pl-k">++</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span><span class="pl-k">|</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>a}}<span class="pl-k">else</span> <span class="pl-k">if</span>(c<span class="pl-k">==</span><span class="pl-c1">3</span><span class="pl-k">||</span>c<span class="pl-k">==</span><span class="pl-c1">4</span>)c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nodeValue</span>,<span class="pl-smi">c</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>d<span class="pl-k">?</span><span class="pl-smi">c</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\r\n</span><span class="pl-k">?</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-smi">c</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\t\n\r</span> ]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>),s[j]<span class="pl-k">=</span>c,m[j<span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>x,x<span class="pl-k">+=</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>,m[j<span class="pl-k">++</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">1</span><span class="pl-k">|</span><span class="pl-c1">1</span>]<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">a)}<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-k">^</span><span class="pl-k">|</span><span class="pl-c1">\s</span>)nocode(?:<span class="pl-c1">\s</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,s<span class="pl-k">=</span>[],x<span class="pl-k">=</span><span class="pl-c1">0</span>,m<span class="pl-k">=</span>[],j<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-en">g</span>(a);<span class="pl-k">return</span>{a<span class="pl-k">:</span><span class="pl-smi">s</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\n</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),d<span class="pl-k">:</span>m}}<span class="pl-k">function</span> <span class="pl-en">H</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>,<span class="pl-smi">g</span>,<span class="pl-smi">b</span>){d<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>{a<span class="pl-k">:</span>d,e<span class="pl-k">:</span>a},<span class="pl-en">g</span>(a),<span class="pl-smi">b</span>.<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(b,<span class="pl-smi">a</span>.<span class="pl-smi">g</span>))}<span class="pl-k">function</span> <span class="pl-en">U</span>(<span class="pl-smi">a</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-k">void</span> <span class="pl-c1">0</span>,g<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">firstChild</span>;g;g<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-c1">nextSibling</span>)<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-c1">nodeType</span>,d<span class="pl-k">=</span>b<span class="pl-k">===</span><span class="pl-c1">1</span><span class="pl-k">?</span>d<span class="pl-k">?</span>a<span class="pl-k">:</span>g<span class="pl-k">:</span>b<span class="pl-k">===</span><span class="pl-c1">3</span><span class="pl-k">?</span><span class="pl-smi">V</span>.<span class="pl-c1">test</span>(<span class="pl-smi">g</span>.<span class="pl-c1">nodeValue</span>)<span class="pl-k">?</span>a<span class="pl-k">:</span>d<span class="pl-k">:</span>d;<span class="pl-k">return</span> d<span class="pl-k">===</span>a<span class="pl-k">?</span><span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">:</span>d}<span class="pl-k">function</span> <span class="pl-en">C</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>){<span class="pl-k">function</span> <span class="pl-en">g</span>(<span class="pl-smi">a</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">e</span>,k<span class="pl-k">=</span>[j,<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>],c<span class="pl-k">=</span><span class="pl-c1">0</span>,i<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-c1">match</span>(s)<span class="pl-k">||</span>[],r<span class="pl-k">=</span>{},n<span class="pl-k">=</span><span class="pl-c1">0</span>,e<span class="pl-k">=</span><span class="pl-smi">i</span>.<span class="pl-c1">length</span>;n<span class="pl-k">&lt;</span>e;<span class="pl-k">++</span>n){<span class="pl-k">var</span> z<span class="pl-k">=</span>i[n],w<span class="pl-k">=</span>r[z],t<span class="pl-k">=</span><span class="pl-k">void</span> <span class="pl-c1">0</span>,f;<span class="pl-k">if</span>(<span class="pl-k">typeof</span> w<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>)f<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">else</span>{<span class="pl-k">var</span> h<span class="pl-k">=</span>b[<span class="pl-smi">z</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)];</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(h)t<span class="pl-k">=</span><span class="pl-smi">z</span>.<span class="pl-c1">match</span>(h[<span class="pl-c1">1</span>]),w<span class="pl-k">=</span>h[<span class="pl-c1">0</span>];<span class="pl-k">else</span>{<span class="pl-k">for</span>(f<span class="pl-k">=</span><span class="pl-c1">0</span>;f<span class="pl-k">&lt;</span>x;<span class="pl-k">++</span>f)<span class="pl-k">if</span>(h<span class="pl-k">=</span>d[f],t<span class="pl-k">=</span><span class="pl-smi">z</span>.<span class="pl-c1">match</span>(h[<span class="pl-c1">1</span>])){w<span class="pl-k">=</span>h[<span class="pl-c1">0</span>];<span class="pl-k">break</span>}t<span class="pl-k">||</span>(w<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">if</span>((f<span class="pl-k">=</span><span class="pl-smi">w</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;=</span><span class="pl-c1">5</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>lang-<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">w</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">5</span>))<span class="pl-k">&amp;&amp;!</span>(t<span class="pl-k">&amp;&amp;</span><span class="pl-k">typeof</span> t[<span class="pl-c1">1</span>]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>))f<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,w<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>;f<span class="pl-k">||</span>(r[z]<span class="pl-k">=</span>w)}h<span class="pl-k">=</span>c;c<span class="pl-k">+=</span><span class="pl-smi">z</span>.<span class="pl-c1">length</span>;<span class="pl-k">if</span>(f){f<span class="pl-k">=</span>t[<span class="pl-c1">1</span>];<span class="pl-k">var</span> l<span class="pl-k">=</span><span class="pl-smi">z</span>.<span class="pl-c1">indexOf</span>(f),B<span class="pl-k">=</span>l<span class="pl-k">+</span><span class="pl-smi">f</span>.<span class="pl-c1">length</span>;t[<span class="pl-c1">2</span>]<span class="pl-k">&amp;&amp;</span>(B<span class="pl-k">=</span><span class="pl-smi">z</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>t[<span class="pl-c1">2</span>].<span class="pl-c1">length</span>,l<span class="pl-k">=</span>B<span class="pl-k">-</span><span class="pl-smi">f</span>.<span class="pl-c1">length</span>);w<span class="pl-k">=</span><span class="pl-smi">w</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">5</span>);<span class="pl-en">H</span>(j<span class="pl-k">+</span>h,<span class="pl-smi">z</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,l),g,k);<span class="pl-en">H</span>(j<span class="pl-k">+</span>h<span class="pl-k">+</span>l,f,<span class="pl-en">I</span>(w,f),k);<span class="pl-en">H</span>(j<span class="pl-k">+</span>h<span class="pl-k">+</span>B,<span class="pl-smi">z</span>.<span class="pl-c1">substring</span>(B),g,k)}<span class="pl-k">else</span> <span class="pl-smi">k</span>.<span class="pl-c1">push</span>(j<span class="pl-k">+</span>h,w)}<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">=</span>k}<span class="pl-k">var</span> b<span class="pl-k">=</span>{},s;(<span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> g<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">concat</span>(d),j<span class="pl-k">=</span>[],k<span class="pl-k">=</span>{},c<span class="pl-k">=</span><span class="pl-c1">0</span>,i<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-c1">length</span>;c<span class="pl-k">&lt;</span>i;<span class="pl-k">++</span>c){<span class="pl-k">var</span> r<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">g[c],n<span class="pl-k">=</span>r[<span class="pl-c1">3</span>];<span class="pl-k">if</span>(n)<span class="pl-k">for</span>(<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-smi">n</span>.<span class="pl-c1">length</span>;<span class="pl-k">--</span>e<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>;)b[<span class="pl-smi">n</span>.<span class="pl-c1">charAt</span>(e)]<span class="pl-k">=</span>r;r<span class="pl-k">=</span>r[<span class="pl-c1">1</span>];n<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>r;<span class="pl-smi">k</span>.<span class="pl-en">hasOwnProperty</span>(n)<span class="pl-k">||</span>(<span class="pl-smi">j</span>.<span class="pl-c1">push</span>(r),k[n]<span class="pl-k">=</span>q)}<span class="pl-smi">j</span>.<span class="pl-c1">push</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-pds">/</span></span>);s<span class="pl-k">=</span><span class="pl-en">S</span>(j)})();<span class="pl-k">var</span> x<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;<span class="pl-k">return</span> g}<span class="pl-k">function</span> <span class="pl-en">v</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span>[],g<span class="pl-k">=</span>[];<span class="pl-smi">a</span>.<span class="pl-smi">tripleQuotedStrings</span><span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&#39;&#39;&#39;(?:<span class="pl-c1">[<span class="pl-k">^</span>&#39;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">|</span>&#39;&#39;<span class="pl-k">?</span>(?=<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span>))<span class="pl-k">*</span>(?:&#39;&#39;&#39;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span>&quot;&quot;&quot;(?:<span class="pl-c1">[<span class="pl-k">^</span>&quot;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">|</span>&quot;&quot;<span class="pl-k">?</span>(?=<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span>))<span class="pl-k">*</span>(?:&quot;&quot;&quot;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span>&#39;(?:<span class="pl-c1">[<span class="pl-k">^</span>&#39;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span>)<span class="pl-k">*</span>(?:&#39;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span>&quot;(?:<span class="pl-c1">[<span class="pl-k">^</span>&quot;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span>)<span class="pl-k">*</span>(?:&quot;<span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span>])<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">multiLineStrings</span><span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&#39;(?:<span class="pl-c1">[<span class="pl-k">^</span>&#39;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span>)<span class="pl-k">*</span>(?:&#39;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span>&quot;(?:<span class="pl-c1">[<span class="pl-k">^</span>&quot;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span>)<span class="pl-k">*</span>(?:&quot;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span>`(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\\</span>`]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span>)<span class="pl-k">*</span>(?:`<span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">q,<span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-cce">\&quot;</span>`<span class="pl-pds">&quot;</span></span>])<span class="pl-k">:</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&#39;(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\n\r</span>&#39;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">.</span>)<span class="pl-k">*</span>(?:&#39;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span>&quot;(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\n\r</span>&quot;<span class="pl-cce">\\</span>]</span><span class="pl-k">|</span><span class="pl-cce">\\</span><span class="pl-c1">.</span>)<span class="pl-k">*</span>(?:&quot;<span class="pl-k">|</span><span class="pl-k">$</span>))<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>]);<span class="pl-smi">a</span>.<span class="pl-smi">verbatimStrings</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">g</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>@&quot;(?:<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">|</span>&quot;&quot;)<span class="pl-k">*</span>(?:&quot;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,q]);<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">hashComments</span>;b<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">a</span>.<span class="pl-smi">cStyleComments</span><span class="pl-k">?</span>(b<span class="pl-k">&gt;</span><span class="pl-c1">1</span><span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#(?:##(?:<span class="pl-c1">[<span class="pl-k">^</span>#]</span><span class="pl-k">|</span>#(?!##))<span class="pl-k">*</span>(?:###<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-k">|</span><span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span>])<span class="pl-k">:</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#(?:(?:define<span class="pl-k">|</span>e(?:l<span class="pl-k">|</span>nd)if<span class="pl-k">|</span>else<span class="pl-k">|</span>error<span class="pl-k">|</span>ifn<span class="pl-k">?</span>def<span class="pl-k">|</span>include<span class="pl-k">|</span>line<span class="pl-k">|</span>pragma<span class="pl-k">|</span>undef<span class="pl-k">|</span>warning)<span class="pl-k">\b</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\n\r</span>]</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span>]),<span class="pl-smi">g</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;(?:(?:(?:<span class="pl-cce">\.\.\/</span>)<span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-cce">\/</span><span class="pl-k">?</span>)(?:<span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span>(?:<span class="pl-cce">\/</span><span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span>)<span class="pl-k">+</span>)<span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span><span class="pl-cce">\.</span>h(?:h<span class="pl-k">|</span>pp<span class="pl-k">|</span><span class="pl-cce">\+\+</span>)<span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-c1">\w</span><span class="pl-k">*</span>)&gt;<span class="pl-pds">/</span></span>,q]))<span class="pl-k">:</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\n\r</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span>]));<span class="pl-smi">a</span>.<span class="pl-smi">cStyleComments</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">g</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/\/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\n\r</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>,q]),<span class="pl-smi">g</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/\*</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">*?</span>(?:<span class="pl-cce">\*\/</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,q]));<span class="pl-k">if</span>(b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">regexLiterals</span>){<span class="pl-k">var</span> s<span class="pl-k">=</span>(b<span class="pl-k">=</span>b<span class="pl-k">&gt;</span><span class="pl-c1">1</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n\r</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-cce">\\</span>S<span class="pl-cce">\\</span>s]<span class="pl-pds">&quot;</span></span>;<span class="pl-smi">g</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>lang-regex<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^(?:^^<span class="pl-cce">\\</span>.?|[+-]|[!=]=?=?|<span class="pl-cce">\\</span>#|%=?|&amp;&amp;?=?|<span class="pl-cce">\\</span>(|<span class="pl-cce">\\</span>*=?|[+<span class="pl-cce">\\</span>-]=|-&gt;|<span class="pl-cce">\\</span>/=?|::?|&lt;&lt;?=?|&gt;&gt;?&gt;?=?|,|;|<span class="pl-cce">\\</span>?|@|<span class="pl-cce">\\</span>[|~|{|<span class="pl-cce">\\</span>^<span class="pl-cce">\\</span>^?=?|<span class="pl-cce">\\</span>|<span class="pl-cce">\\</span>|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)<span class="pl-cce">\\</span>s*(<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/(?=[^/*<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>])(?:[^/<span class="pl-cce">\\</span>x5B<span class="pl-cce">\\</span>x5C<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]|<span class="pl-cce">\\</span>x5C<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>s<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-cce">\\</span>x5B(?:[^<span class="pl-cce">\\</span>x5C<span class="pl-cce">\\</span>x5D<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]|<span class="pl-cce">\\</span>x5C<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">s<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)*(?:<span class="pl-cce">\\</span>x5D|$))+/<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>)])}(b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">types</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">g</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>typ<span class="pl-pds">&quot;</span></span>,b]);b<span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">keywords</span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span> <span class="pl-k">|</span> <span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);<span class="pl-smi">b</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">g</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>kwd<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^(?:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">b</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\s</span>,]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>),q]);<span class="pl-smi">d</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-cce">\r\n\t\u</span>00a0<span class="pl-pds">&quot;</span></span>]);b<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>^.[^<span class="pl-cce">\\</span>s<span class="pl-cce">\\</span>w.$@&#39;<span class="pl-cce">\&quot;</span>`/<span class="pl-cce">\\\\</span>]*<span class="pl-pds">&quot;</span></span>;<span class="pl-smi">a</span>.<span class="pl-smi">regexLiterals</span><span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>(?!s*/)<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">g</span>.<span class="pl-c1">push</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>lit<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>@<span class="pl-c1">[$_<span class="pl-c1">a-z</span>][<span class="pl-c1">\w</span>$@]</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,q],[<span class="pl-s"><span class="pl-pds">&quot;</span>typ<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[@_]</span><span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">A-Z</span>]</span><span class="pl-k">+</span><span class="pl-c1">[<span class="pl-c1">a-z</span>][<span class="pl-c1">\w</span>$@]</span><span class="pl-k">*</span><span class="pl-k">|</span><span class="pl-c1">\w</span><span class="pl-k">+</span>_t<span class="pl-k">\b</span>)<span class="pl-pds">/</span></span>,q],[<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[$_<span class="pl-c1">a-z</span>][<span class="pl-c1">\w</span>$@]</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,q],[<span class="pl-s"><span class="pl-pds">&quot;</span>lit<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:0x<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">a-f</span>]</span><span class="pl-k">+</span><span class="pl-k">|</span>(?:<span class="pl-c1">\d</span>(?:_<span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">*</span><span class="pl-c1">\d</span><span class="pl-k">*</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">*</span>)<span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-cce">\+</span>)(?:e<span class="pl-c1">[+-]</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span>0123456789<span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\\</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">?</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">q],[<span class="pl-s"><span class="pl-pds">&quot;</span>pun<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">RegExp</span>(b),q]);<span class="pl-k">return</span> <span class="pl-en">C</span>(d,g)}<span class="pl-k">function</span> <span class="pl-en">J</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>,<span class="pl-smi">g</span>){<span class="pl-k">function</span> <span class="pl-en">b</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nodeType</span>;<span class="pl-k">if</span>(c<span class="pl-k">==</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;!</span><span class="pl-smi">x</span>.<span class="pl-c1">test</span>(<span class="pl-smi">a</span>.<span class="pl-c1">className</span>))<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>br<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">a</span>.<span class="pl-c1">nodeName</span>)<span class="pl-en">s</span>(a),<span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>.<span class="pl-en">removeChild</span>(a);<span class="pl-k">else</span> <span class="pl-k">for</span>(a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">firstChild</span>;a;a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>)<span class="pl-en">b</span>(a);<span class="pl-k">else</span> <span class="pl-k">if</span>((c<span class="pl-k">==</span><span class="pl-c1">3</span><span class="pl-k">||</span>c<span class="pl-k">==</span><span class="pl-c1">4</span>)<span class="pl-k">&amp;&amp;</span>g){<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nodeValue</span>,i<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">match</span>(m);<span class="pl-k">if</span>(i)c<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-smi">i</span>.<span class="pl-c1">index</span>),<span class="pl-smi">a</span>.<span class="pl-c1">nodeValue</span><span class="pl-k">=</span>c,(d<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">substring</span>(<span class="pl-smi">i</span>.<span class="pl-c1">index</span><span class="pl-k">+</span>i[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>))<span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(<span class="pl-smi">j</span>.<span class="pl-c1">createTextNode</span>(d),<span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>),<span class="pl-en">s</span>(a),c<span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>.<span class="pl-en">removeChild</span>(a)}}<span class="pl-k">function</span> <span class="pl-en">s</span>(<span class="pl-smi">a</span>){<span class="pl-k">function</span> <span class="pl-en">b</span>(<span class="pl-smi">a</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">c<span class="pl-k">?</span><span class="pl-smi">a</span>.<span class="pl-c1">cloneNode</span>(<span class="pl-k">!</span><span class="pl-c1">1</span>)<span class="pl-k">:</span>a,e<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>;<span class="pl-k">if</span>(e){<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-en">b</span>(e,<span class="pl-c1">1</span>),g<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>;<span class="pl-smi">e</span>.<span class="pl-c1">appendChild</span>(d);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span>g;i;i<span class="pl-k">=</span>g)g<span class="pl-k">=</span><span class="pl-smi">i</span>.<span class="pl-c1">nextSibling</span>,<span class="pl-smi">e</span>.<span class="pl-c1">appendChild</span>(i)}<span class="pl-k">return</span> d}<span class="pl-k">for</span>(;<span class="pl-k">!</span><span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>;)<span class="pl-k">if</span>(a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>,<span class="pl-k">!</span>a)<span class="pl-k">return</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-en">b</span>(<span class="pl-smi">a</span>.<span class="pl-c1">nextSibling</span>,<span class="pl-c1">0</span>),d;(d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">d</span>.<span class="pl-c1">nodeType</span><span class="pl-k">===</span><span class="pl-c1">1</span>;)a<span class="pl-k">=</span>d;<span class="pl-smi">c</span>.<span class="pl-c1">push</span>(a)}<span class="pl-k">for</span>(<span class="pl-k">var</span> x<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-k">^</span><span class="pl-k">|</span><span class="pl-c1">\s</span>)nocode(?:<span class="pl-c1">\s</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,m<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\n</span><span class="pl-pds">/</span></span>,j<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">ownerDocument</span>,k<span class="pl-k">=</span><span class="pl-smi">j</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>li<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">a</span>.<span class="pl-c1">firstChild</span>;)<span class="pl-smi">k</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">a</span>.<span class="pl-c1">firstChild</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span>[k],i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>i)<span class="pl-en">b</span>(c[i]);d<span class="pl-k">===</span>(d<span class="pl-k">|</span><span class="pl-c1">0</span>)<span class="pl-k">&amp;&amp;</span>c[<span class="pl-c1">0</span>].<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>value<span class="pl-pds">&quot;</span></span>,d);<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-smi">j</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ol<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">r</span>.<span class="pl-c1">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>linenums<span class="pl-pds">&quot;</span></span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>,d<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">|</span><span class="pl-c1">0</span>)<span class="pl-k">||</span><span class="pl-c1">0</span>,i<span class="pl-k">=</span><span class="pl-c1">0</span>,n<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;i<span class="pl-k">&lt;</span>n;<span class="pl-k">++</span>i)k<span class="pl-k">=</span>c[i],<span class="pl-smi">k</span>.<span class="pl-c1">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>L<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(i<span class="pl-k">+</span>d)<span class="pl-k">%</span><span class="pl-c1">10</span>,<span class="pl-smi">k</span>.<span class="pl-c1">firstChild</span><span class="pl-k">||</span><span class="pl-smi">k</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">j</span>.<span class="pl-c1">createTextNode</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a0<span class="pl-pds">&quot;</span></span>)),<span class="pl-smi">r</span>.<span class="pl-c1">appendChild</span>(k);<span class="pl-smi">a</span>.<span class="pl-c1">appendChild</span>(r)}<span class="pl-k">function</span> <span class="pl-en">p</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> g<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;<span class="pl-k">--</span>g<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>;){<span class="pl-k">var</span> b<span class="pl-k">=</span>d[g];<span class="pl-smi">F</span>.<span class="pl-en">hasOwnProperty</span>(b)<span class="pl-k">?</span><span class="pl-smi">D</span>.<span class="pl-smi">console</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">console</span>.<span class="pl-c1">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>cannot override language handler %s<span class="pl-pds">&quot;</span></span>,b)<span class="pl-k">:</span>F[b]<span class="pl-k">=</span>a}}<span class="pl-k">function</span> <span class="pl-en">I</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>a<span class="pl-k">||!</span><span class="pl-smi">F</span>.<span class="pl-en">hasOwnProperty</span>(a))a<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span>&lt;<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(d)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>default-markup<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>default-code<span class="pl-pds">&quot;</span></span>;<span class="pl-k">return</span> F[a]}<span class="pl-k">function</span> <span class="pl-en">K</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">h</span>;<span class="pl-k">try</span>{<span class="pl-k">var</span> g<span class="pl-k">=</span><span class="pl-en">T</span>(<span class="pl-smi">a</span>.<span class="pl-smi">c</span>,<span class="pl-smi">a</span>.<span class="pl-smi">i</span>),b<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-smi">a</span>;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">a</span>.<span class="pl-smi">a</span><span class="pl-k">=</span>b;<span class="pl-smi">a</span>.<span class="pl-smi">d</span><span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-smi">d</span>;<span class="pl-smi">a</span>.<span class="pl-smi">e</span><span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-en">I</span>(d,b)(a);<span class="pl-k">var</span> s<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>MSIE<span class="pl-c1">\s</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>.<span class="pl-c1">exec</span>(<span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>),s<span class="pl-k">=</span>s<span class="pl-k">&amp;&amp;</span><span class="pl-k">+</span>s[<span class="pl-c1">1</span>]<span class="pl-k">&lt;=</span><span class="pl-c1">8</span>,d<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>,x<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">a</span>,m<span class="pl-k">=</span><span class="pl-smi">x</span>.<span class="pl-c1">length</span>,g<span class="pl-k">=</span><span class="pl-c1">0</span>,j<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">d</span>,k<span class="pl-k">=</span><span class="pl-smi">j</span>.<span class="pl-c1">length</span>,b<span class="pl-k">=</span><span class="pl-c1">0</span>,c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">g</span>,i<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>,r<span class="pl-k">=</span><span class="pl-c1">0</span>;c[i]<span class="pl-k">=</span>m;<span class="pl-k">var</span> n,e;<span class="pl-k">for</span>(e<span class="pl-k">=</span>n<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span>i;)c[e]<span class="pl-k">!==</span>c[e<span class="pl-k">+</span><span class="pl-c1">2</span>]<span class="pl-k">?</span>(c[n<span class="pl-k">++</span>]<span class="pl-k">=</span>c[e<span class="pl-k">++</span>],c[n<span class="pl-k">++</span>]<span class="pl-k">=</span>c[e<span class="pl-k">++</span>])<span class="pl-k">:</span>e<span class="pl-k">+=</span><span class="pl-c1">2</span>;i<span class="pl-k">=</span>n;<span class="pl-k">for</span>(e<span class="pl-k">=</span>n<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span>i;){<span class="pl-k">for</span>(<span class="pl-k">var</span> p<span class="pl-k">=</span>c[e],w<span class="pl-k">=</span>c[e<span class="pl-k">+</span><span class="pl-c1">1</span>],t<span class="pl-k">=</span>e<span class="pl-k">+</span><span class="pl-c1">2</span>;t<span class="pl-k">+</span><span class="pl-c1">2</span><span class="pl-k">&lt;=</span>i<span class="pl-k">&amp;&amp;</span>c[t<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">===</span>w;)t<span class="pl-k">+=</span><span class="pl-c1">2</span>;c[n<span class="pl-k">++</span>]<span class="pl-k">=</span>p;c[n<span class="pl-k">++</span>]<span class="pl-k">=</span>w;e<span class="pl-k">=</span>t}<span class="pl-smi">c</span>.<span class="pl-c1">length</span><span class="pl-k">=</span>n;<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>,h;<span class="pl-k">if</span>(f)h<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span>,<span class="pl-smi">f</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;<span class="pl-k">try</span>{<span class="pl-k">for</span>(;b<span class="pl-k">&lt;</span>k;){<span class="pl-k">var</span> l<span class="pl-k">=</span>j[b<span class="pl-k">+</span><span class="pl-c1">2</span>]<span class="pl-k">||</span>m,B<span class="pl-k">=</span>c[r<span class="pl-k">+</span><span class="pl-c1">2</span>]<span class="pl-k">||</span>m,t<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(l,B),A<span class="pl-k">=</span>j[b<span class="pl-k">+</span><span class="pl-c1">1</span>],G;<span class="pl-k">if</span>(<span class="pl-smi">A</span>.<span class="pl-c1">nodeType</span><span class="pl-k">!==</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span>(G<span class="pl-k">=</span><span class="pl-smi">x</span>.<span class="pl-c1">substring</span>(g,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">t))){s<span class="pl-k">&amp;&amp;</span>(G<span class="pl-k">=</span><span class="pl-smi">G</span>.<span class="pl-c1">replace</span>(d,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span>));<span class="pl-smi">A</span>.<span class="pl-c1">nodeValue</span><span class="pl-k">=</span>G;<span class="pl-k">var</span> L<span class="pl-k">=</span><span class="pl-smi">A</span>.<span class="pl-c1">ownerDocument</span>,o<span class="pl-k">=</span><span class="pl-smi">L</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>span<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">o</span>.<span class="pl-c1">className</span><span class="pl-k">=</span>c[r<span class="pl-k">+</span><span class="pl-c1">1</span>];<span class="pl-k">var</span> v<span class="pl-k">=</span><span class="pl-smi">A</span>.<span class="pl-c1">parentNode</span>;<span class="pl-smi">v</span>.<span class="pl-c1">replaceChild</span>(o,A);<span class="pl-smi">o</span>.<span class="pl-c1">appendChild</span>(A);g<span class="pl-k">&lt;</span>l<span class="pl-k">&amp;&amp;</span>(j[b<span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>A<span class="pl-k">=</span><span class="pl-smi">L</span>.<span class="pl-c1">createTextNode</span>(<span class="pl-smi">x</span>.<span class="pl-c1">substring</span>(t,l)),<span class="pl-smi">v</span>.<span class="pl-c1">insertBefore</span>(A,<span class="pl-smi">o</span>.<span class="pl-c1">nextSibling</span>))}g<span class="pl-k">=</span>t;g<span class="pl-k">&gt;=</span>l<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">+=</span><span class="pl-c1">2</span>);g<span class="pl-k">&gt;=</span>B<span class="pl-k">&amp;&amp;</span>(r<span class="pl-k">+=</span><span class="pl-c1">2</span>)}}<span class="pl-k">finally</span>{<span class="pl-k">if</span>(f)<span class="pl-smi">f</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span><span class="pl-k">=</span>h}}<span class="pl-k">catch</span>(u){<span class="pl-smi">D</span>.<span class="pl-smi">console</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">console</span>.<span class="pl-c1">log</span>(u<span class="pl-k">&amp;&amp;</span><span class="pl-smi">u</span>.<span class="pl-smi">stack</span><span class="pl-k">||</span>u)}}<span class="pl-k">var</span> D<span class="pl-k">=</span><span class="pl-c1">window</span>,y<span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>break,continue,do,else,for,if,return,while<span class="pl-pds">&quot;</span></span>],E<span class="pl-k">=</span>[[y,<span class="pl-s"><span class="pl-pds">&quot;</span>auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof<span class="pl-pds">&quot;</span></span>],M<span class="pl-k">=</span>[E,<span class="pl-s"><span class="pl-pds">&quot;</span>alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where<span class="pl-pds">&quot;</span></span>],N<span class="pl-k">=</span>[E,<span class="pl-s"><span class="pl-pds">&quot;</span>abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">O<span class="pl-k">=</span>[N,<span class="pl-s"><span class="pl-pds">&quot;</span>as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where<span class="pl-pds">&quot;</span></span>],E<span class="pl-k">=</span>[E,<span class="pl-s"><span class="pl-pds">&quot;</span>debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN<span class="pl-pds">&quot;</span></span>],P<span class="pl-k">=</span>[y,<span class="pl-s"><span class="pl-pds">&quot;</span>and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">Q<span class="pl-k">=</span>[y,<span class="pl-s"><span class="pl-pds">&quot;</span>alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END<span class="pl-pds">&quot;</span></span>],W<span class="pl-k">=</span>[y,<span class="pl-s"><span class="pl-pds">&quot;</span>as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use<span class="pl-pds">&quot;</span></span>],y<span class="pl-k">=</span>[y,<span class="pl-s"><span class="pl-pds">&quot;</span>case,done,elif,esac,eval,fi,function,in,local,set,then,until<span class="pl-pds">&quot;</span></span>],R<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(DIR<span class="pl-k">|</span>FILE<span class="pl-k">|</span>vector<span class="pl-k">|</span>(de<span class="pl-k">|</span>priority_)<span class="pl-k">?</span>queue<span class="pl-k">|</span>list<span class="pl-k">|</span>stack<span class="pl-k">|</span>(const_)<span class="pl-k">?</span>iterator<span class="pl-k">|</span>(multi)<span class="pl-k">?</span>(set<span class="pl-k">|</span>map)<span class="pl-k">|</span>bitset<span class="pl-k">|</span>u<span class="pl-k">?</span>(int<span class="pl-k">|</span>float)<span class="pl-c1">\d</span><span class="pl-k">*</span>)<span class="pl-k">\b</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">V<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\S</span><span class="pl-pds">/</span></span>,X<span class="pl-k">=</span><span class="pl-en">v</span>({keywords<span class="pl-k">:</span>[M,O,E,<span class="pl-s"><span class="pl-pds">&quot;</span>caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END<span class="pl-pds">&quot;</span></span>,P,Q,y],hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),F<span class="pl-k">=</span>{};<span class="pl-en">p</span>(X,[<span class="pl-s"><span class="pl-pds">&quot;</span>default-code<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">C</span>([],[[<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-k">^</span>&lt;?]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>dec<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;!<span class="pl-c1">\w</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>(?:&gt;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;<span class="pl-cce">\!</span>--<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">*?</span>(?:--<span class="pl-cce">\&gt;</span><span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;<span class="pl-cce">\?</span>(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+?</span>)(?:<span class="pl-cce">\?</span>&gt;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;%(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+?</span>)(?:%&gt;<span class="pl-k">|</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>pun<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&lt;<span class="pl-c1">[%?]</span><span class="pl-k">|</span><span class="pl-c1">[%?]</span>&gt;)<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;xmp<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+?</span>)&lt;<span class="pl-cce">\/</span>xmp<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-js<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;script<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">*?</span>)(&lt;<span class="pl-cce">\/</span>script<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;)<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-css<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;style<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">*?</span>)(&lt;<span class="pl-cce">\/</span>style<span class="pl-k">\b</span><span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>&gt;)<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-in.tag<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(&lt;<span class="pl-cce">\/</span><span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">a-z</span>][<span class="pl-k">^</span>&lt;&gt;]</span><span class="pl-k">*</span>&gt;)<span class="pl-pds">/</span>i</span>]]),[<span class="pl-s"><span class="pl-pds">&quot;</span>default-markup<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>htm<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>html<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>mxml<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>xhtml<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>xml<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>xsl<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">C</span>([[<span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-cce">\t\r\n</span><span class="pl-pds">&quot;</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>atv<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&quot;<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">*</span>&quot;<span class="pl-k">?</span><span class="pl-k">|</span>&#39;<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span><span class="pl-k">*</span>&#39;<span class="pl-k">?</span>)<span class="pl-pds">/</span></span>,q,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>]],[[<span class="pl-s"><span class="pl-pds">&quot;</span>tag<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^^</span>&lt;<span class="pl-cce">\/</span><span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">a-z</span>]</span>(?:<span class="pl-c1">[<span class="pl-c1"><span class="pl-cce">\w</span>-.</span>:]</span><span class="pl-k">*</span><span class="pl-c1">\w</span>)<span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\/</span><span class="pl-k">?</span>&gt;<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>atn<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?!style<span class="pl-c1">[<span class="pl-c1">\s</span>=]</span><span class="pl-k">|</span>on)<span class="pl-c1">[<span class="pl-c1">a-z</span>]</span>(?:<span class="pl-c1">[<span class="pl-c1">\w</span>:-]</span><span class="pl-k">*</span><span class="pl-c1">\w</span>)<span class="pl-k">?</span><span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-uq.val<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&quot;&#39;&gt;]</span><span class="pl-k">*</span>(?:<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&quot;&#39;/&gt;]</span><span class="pl-k">|</span><span class="pl-cce">\/</span>(?=<span class="pl-c1">\s</span>)))<span class="pl-pds">/</span></span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>pun<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[/<span class="pl-c1">&lt;-&gt;</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>],</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-js<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>&quot;(<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">+</span>)&quot;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-js<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>&#39;(<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span><span class="pl-k">+</span>)&#39;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-js<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>on<span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&quot;&#39;&gt;]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-css<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>style<span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>&quot;(<span class="pl-c1">[<span class="pl-k">^</span>&quot;]</span><span class="pl-k">+</span>)&quot;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-css<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>style<span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>&#39;(<span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span><span class="pl-k">+</span>)&#39;<span class="pl-pds">/</span>i</span>],[<span class="pl-s"><span class="pl-pds">&quot;</span>lang-css<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>style<span class="pl-c1">\s</span><span class="pl-k">*</span>=<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>&quot;&#39;&gt;]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>]]),[<span class="pl-s"><span class="pl-pds">&quot;</span>in.tag<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">C</span>([],[[<span class="pl-s"><span class="pl-pds">&quot;</span>atv<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>]]),[<span class="pl-s"><span class="pl-pds">&quot;</span>uq.val<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span>M,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,types<span class="pl-k">:</span>R}),[<span class="pl-s"><span class="pl-pds">&quot;</span>c<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>cc<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>cpp<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>cxx<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>cyc<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>m<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>null,true,false<span class="pl-pds">&quot;</span></span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span>O,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,verbatimStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,types<span class="pl-k">:</span>R}),</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">[<span class="pl-s"><span class="pl-pds">&quot;</span>cs<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span>N,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>java<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span>y,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>bash<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>bsh<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>csh<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>sh<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span>P,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,tripleQuotedStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>cv<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>py<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>python<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END<span class="pl-pds">&quot;</span></span>,hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-c1">2</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>perl<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>pl<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>pm<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span>Q,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">hashComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multiLineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>rb<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>ruby<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span>E,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>javascript<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>js<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes<span class="pl-pds">&quot;</span></span>,hashComments<span class="pl-k">:</span><span class="pl-c1">3</span>,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multilineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,tripleQuotedStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,regexLiterals<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>coffee<span class="pl-pds">&quot;</span></span>]);<span class="pl-en">p</span>(<span class="pl-en">v</span>({keywords<span class="pl-k">:</span>W,cStyleComments<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,multilineStrings<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}),[<span class="pl-s"><span class="pl-pds">&quot;</span>rc<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>rs<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>rust<span class="pl-pds">&quot;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-en">p</span>(<span class="pl-en">C</span>([],[[<span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>]]),[<span class="pl-s"><span class="pl-pds">&quot;</span>regex<span class="pl-pds">&quot;</span></span>]);<span class="pl-k">var</span> Y<span class="pl-k">=</span><span class="pl-smi">D</span>.<span class="pl-c1">PR</span><span class="pl-k">=</span>{createSimpleLexer<span class="pl-k">:</span>C,registerLangHandler<span class="pl-k">:</span>p,sourceDecorator<span class="pl-k">:</span>v,PR_ATTRIB_NAME<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>atn<span class="pl-pds">&quot;</span></span>,PR_ATTRIB_VALUE<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>atv<span class="pl-pds">&quot;</span></span>,PR_COMMENT<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>com<span class="pl-pds">&quot;</span></span>,PR_DECLARATION<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>dec<span class="pl-pds">&quot;</span></span>,PR_KEYWORD<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>kwd<span class="pl-pds">&quot;</span></span>,PR_LITERAL<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>lit<span class="pl-pds">&quot;</span></span>,PR_NOCODE<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>nocode<span class="pl-pds">&quot;</span></span>,PR_PLAIN<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>pln<span class="pl-pds">&quot;</span></span>,PR_PUNCTUATION<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>pun<span class="pl-pds">&quot;</span></span>,PR_SOURCE<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,PR_STRING<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>str<span class="pl-pds">&quot;</span></span>,PR_TAG<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>tag<span class="pl-pds">&quot;</span></span>,PR_TYPE<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>typ<span class="pl-pds">&quot;</span></span>,prettyPrintOne<span class="pl-k">:</span><span class="pl-c1">D</span>.<span class="pl-en">prettyPrintOne</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>,<span class="pl-smi">g</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">b</span>.<span class="pl-smi">innerHTML</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;pre&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/pre&gt;<span class="pl-pds">&quot;</span></span>;b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">firstChild</span>;g<span class="pl-k">&amp;&amp;</span><span class="pl-en">J</span>(b,g,<span class="pl-k">!</span><span class="pl-c1">0</span>);<span class="pl-en">K</span>({h<span class="pl-k">:</span>d,j<span class="pl-k">:</span>g,c<span class="pl-k">:</span>b,i<span class="pl-k">:</span><span class="pl-c1">1</span>});</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-smi">innerHTML</span>},prettyPrint<span class="pl-k">:</span><span class="pl-c1">D</span>.<span class="pl-en">prettyPrint</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>){<span class="pl-k">function</span> <span class="pl-en">g</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">D</span>.<span class="pl-c1">PR_SHOULD_USE_CONTINUATION</span><span class="pl-k">?</span><span class="pl-smi">c</span>.<span class="pl-en">now</span>()<span class="pl-k">+</span><span class="pl-c1">250</span><span class="pl-k">:</span><span class="pl-c1">Infinity</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">p</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">c</span>.<span class="pl-en">now</span>()<span class="pl-k">&lt;</span>b;i<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> d<span class="pl-k">=</span>p[i],j<span class="pl-k">=</span>h,k<span class="pl-k">=</span>d;k<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-smi">previousSibling</span>;){<span class="pl-k">var</span> m<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">nodeType</span>,o<span class="pl-k">=</span>(m<span class="pl-k">===</span><span class="pl-c1">7</span><span class="pl-k">||</span>m<span class="pl-k">===</span><span class="pl-c1">8</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">k</span>.<span class="pl-c1">nodeValue</span>;<span class="pl-k">if</span>(o<span class="pl-k">?</span><span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\?</span><span class="pl-k">?</span>prettify<span class="pl-k">\b</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(o)<span class="pl-k">:</span>m<span class="pl-k">!==</span><span class="pl-c1">3</span><span class="pl-k">||</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\S</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">k</span>.<span class="pl-c1">nodeValue</span>))<span class="pl-k">break</span>;<span class="pl-k">if</span>(o){j<span class="pl-k">=</span>{};<span class="pl-smi">o</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>(<span class="pl-c1">\w</span><span class="pl-k">+</span>)=(<span class="pl-c1">[<span class="pl-c1">\w</span>%+<span class="pl-c1">\-.</span>:]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>g</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){j[b]<span class="pl-k">=</span>c});<span class="pl-k">break</span>}}k<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">className</span>;<span class="pl-k">if</span>((j<span class="pl-k">!==</span>h<span class="pl-k">||</span><span class="pl-smi">e</span>.<span class="pl-c1">test</span>(k))<span class="pl-k">&amp;&amp;!</span><span class="pl-smi">v</span>.<span class="pl-c1">test</span>(k)){m<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">for</span>(o<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">parentNode</span>;o;o<span class="pl-k">=</span><span class="pl-smi">o</span>.<span class="pl-c1">parentNode</span>)<span class="pl-k">if</span>(<span class="pl-smi">f</span>.<span class="pl-c1">test</span>(<span class="pl-smi">o</span>.<span class="pl-c1">tagName</span>)<span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">o</span>.<span class="pl-c1">className</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-c1">test</span>(<span class="pl-smi">o</span>.<span class="pl-c1">className</span>)){m<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">break</span>}<span class="pl-k">if</span>(<span class="pl-k">!</span>m){<span class="pl-smi">d</span>.<span class="pl-c1">className</span><span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span> prettyprinted<span class="pl-pds">&quot;</span></span>;m<span class="pl-k">=</span><span class="pl-smi">j</span>.<span class="pl-c1">lang</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>m){<span class="pl-k">var</span> m<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">match</span>(n),y;<span class="pl-k">if</span>(<span class="pl-k">!</span>m<span class="pl-k">&amp;&amp;</span>(y<span class="pl-k">=</span><span class="pl-en">U</span>(d))<span class="pl-k">&amp;&amp;</span><span class="pl-smi">t</span>.<span class="pl-c1">test</span>(<span class="pl-smi">y</span>.<span class="pl-c1">tagName</span>))m<span class="pl-k">=</span><span class="pl-smi">y</span>.<span class="pl-c1">className</span>.<span class="pl-c1">match</span>(n);m<span class="pl-k">&amp;&amp;</span>(m<span class="pl-k">=</span>m[<span class="pl-c1">1</span>])}<span class="pl-k">if</span>(<span class="pl-smi">w</span>.<span class="pl-c1">test</span>(<span class="pl-smi">d</span>.<span class="pl-c1">tagName</span>))o<span class="pl-k">=</span><span class="pl-c1">1</span>;<span class="pl-k">else</span> <span class="pl-k">var</span> o<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-smi">currentStyle</span>,u<span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-c1">defaultView</span>,o<span class="pl-k">=</span>(o<span class="pl-k">=</span>o<span class="pl-k">?</span><span class="pl-smi">o</span>.<span class="pl-c1">whiteSpace</span><span class="pl-k">:</span>u<span class="pl-k">&amp;&amp;</span><span class="pl-smi">u</span>.<span class="pl-smi">getComputedStyle</span><span class="pl-k">?</span><span class="pl-smi">u</span>.<span class="pl-en">getComputedStyle</span>(d,q).<span class="pl-en">getPropertyValue</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>white-space<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-c1">0</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>pre<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">o</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">3</span>);u<span class="pl-k">=</span><span class="pl-smi">j</span>.<span class="pl-smi">linenums</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>(u<span class="pl-k">=</span>u<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span><span class="pl-k">+</span>u))u<span class="pl-k">=</span>(u<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>linenums<span class="pl-k">\b</span>(?::(<span class="pl-c1">\d</span><span class="pl-k">+</span>))<span class="pl-k">?</span><span class="pl-pds">/</span></span>))<span class="pl-k">?</span>u[<span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span>u[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">?+</span>u[<span class="pl-c1">1</span>]<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">1</span>;u<span class="pl-k">&amp;&amp;</span><span class="pl-en">J</span>(d,u,o);r<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">{h<span class="pl-k">:</span>m,c<span class="pl-k">:</span>d,j<span class="pl-k">:</span>u,i<span class="pl-k">:</span>o};<span class="pl-en">K</span>(r)}}}i<span class="pl-k">&lt;</span><span class="pl-smi">p</span>.<span class="pl-c1">length</span><span class="pl-k">?</span><span class="pl-c1">setTimeout</span>(g,<span class="pl-c1">250</span>)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> a<span class="pl-k">&amp;&amp;</span><span class="pl-en">a</span>()}<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span>d<span class="pl-k">||</span><span class="pl-c1">document</span>.<span class="pl-c1">body</span>,s<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">ownerDocument</span><span class="pl-k">||</span><span class="pl-c1">document</span>,b<span class="pl-k">=</span>[<span class="pl-smi">b</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>pre<span class="pl-pds">&quot;</span></span>),<span class="pl-smi">b</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>code<span class="pl-pds">&quot;</span></span>),<span class="pl-smi">b</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>xmp<span class="pl-pds">&quot;</span></span>)],p<span class="pl-k">=</span>[],m<span class="pl-k">=</span><span class="pl-c1">0</span>;m<span class="pl-k">&lt;</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>;<span class="pl-k">++</span>m)<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>,k<span class="pl-k">=</span>b[m].<span class="pl-c1">length</span>;j<span class="pl-k">&lt;</span>k;<span class="pl-k">++</span>j)<span class="pl-smi">p</span>.<span class="pl-c1">push</span>(b[m][j]);<span class="pl-k">var</span> b<span class="pl-k">=</span>q,c<span class="pl-k">=</span><span class="pl-c1">Date</span>;<span class="pl-smi">c</span>.<span class="pl-smi">now</span><span class="pl-k">||</span>(c<span class="pl-k">=</span>{<span class="pl-en">now</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span><span class="pl-k">+</span><span class="pl-k">new</span> <span class="pl-en">Date</span>}});<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,r,n<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>lang(?:uage)<span class="pl-k">?</span>-(<span class="pl-c1">[<span class="pl-c1">\w.</span>]</span><span class="pl-k">+</span>)(?!<span class="pl-c1">\S</span>)<span class="pl-pds">/</span></span>,e<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>prettyprint<span class="pl-k">\b</span><span class="pl-pds">/</span></span>,v<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>prettyprinted<span class="pl-k">\b</span><span class="pl-pds">/</span></span>,w<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>pre<span class="pl-k">|</span>xmp<span class="pl-pds">/</span>i</span>,t<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>code<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>,f<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:pre<span class="pl-k">|</span>code<span class="pl-k">|</span>xmp)<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">h<span class="pl-k">=</span>{};<span class="pl-en">g</span>()}};<span class="pl-k">typeof</span> define<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">define</span>.<span class="pl-smi">amd</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">define</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>google-code-prettify<span class="pl-pds">&quot;</span></span>,[],<span class="pl-k">function</span>(){<span class="pl-k">return</span> Y})})();}()</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
          <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" role="img" title="GitHub " version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.09765s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-WD5gzi4C52OGoBs3/VsYlY3yX1YpIUaVTEazu8eJDok=" src="https://assets-cdn.github.com/assets/frameworks-583e60ce2e02e76386a01b37fd5b18958df25f56292146954c46b3bbc7890e89.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-kQuO1Clh+QrvMqbtJjbjPnt6vPThe9jOIEEXlfQ8ZHQ=" src="https://assets-cdn.github.com/assets/github-910b8ed42961f90aef32a6ed2636e33e7b7abcf4e17bd8ce20411795f43c6474.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

