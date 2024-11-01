import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
  
  return (
    <section className='App'>
      <TwitterFollowCard
      userName='Jesus-Almansa' isFollowing>
      Jesus Almansa

      </TwitterFollowCard>

      <TwitterFollowCard
      userName='rauulpastor' isFollowing={false}>
      Raul Pastor
      </TwitterFollowCard>

      <TwitterFollowCard
      userName='NicolasVollmer' isFollowing={false}>
      NicolasVollmer
      </TwitterFollowCard>
      
    </section>
  )
}