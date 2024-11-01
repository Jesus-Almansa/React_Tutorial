import { useState } from 'react';
export function TwitterFollowCard ({children, userName}) {

    const [isFollowing, setIsFollowing] = useState(false);

    const formatUserName = (userName) => `@${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonclassName = isFollowing 
    ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
      setIsFollowing(!isFollowing);
    }
  
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
          <button className={buttonclassName} onClick={handleClick}>
            {text}
          </button> 
        </aside>
      </article>
    );
  }
  