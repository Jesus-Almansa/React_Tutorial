import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
  
  return (
    <section className='App'>
      <TwitterFollowCard
      userName='Jesus-Almansa' >
      Jesus Almansa

      </TwitterFollowCard>

      <TwitterFollowCard
      userName='rauulpastor' >
      Raul Pastor
      </TwitterFollowCard>

      <TwitterFollowCard
      userName='NicolasVollmer' >
      NicolasVollmer
      </TwitterFollowCard>

      <TwitterFollowCard
      userName='torvalds' >
      torvalds
      </TwitterFollowCard>
      
    </section>
  )
}