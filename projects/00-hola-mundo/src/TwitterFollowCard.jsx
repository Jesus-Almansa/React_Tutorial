import { useState } from 'react';
export function TwitterFollowCard ({children, userName, isFollowing }) {
    const formatUserName = (userName) => `@${userName}`;
    const text = isFollowing ? 'Following' : 'Not following';
    const buttonclassName = isFollowing 
    ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  
    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img 
            className='tw-followCard-avatar'
            alt="GitHub Profile Picture" 
            src={`https://unavatar.io/github/${userName}`}
          />
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}
            </span>
          </div>
        </header>
  
        <aside>
          <button className={buttonclassName}>
            {text}
          </button> 
        </aside>
      </article>
    );
  }
  