import './App.css';

export function App () {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        alt="Avatar placeholder" 
        src="https://unavatar.io/github/Jesus-Almansa?ttl=1h" />
        <div className='tw-followCard-info'>
          <strong>Jesus Almansa</strong>
          <span>@garzonpazorpfield</span>
        </div>
      </header>

      <aside>
        <button>
        Follow
        </button> 
      </aside>
    </article>
  )
}