import { Children } from 'react'
import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

const users = [{
  username: 'midudev',
  name: 'Miguel Angel',
  isFollowing: true,

},
{
  username: 'aleclto7',
  name: 'Alexis Calixto',
  isFollowing: false,

},
{
  username: 'pheralb',
  name: 'Pablo Heraldo',
  isFollowing: false,

},
{
  username: 'TMChein',
  name: 'Tomas Chein',
  isFollowing: true,
},]


export default function App() {
  return (
    <section className='App'>
      {
      users.map(({username, name, isFollowing}) => ( 
      <TwitterFollowCard 
          key={username}
          username={username}
          initialIsFollowing={isFollowing}
      > 
      {name}
      </TwitterFollowCard>
      ))
      }
    </section>
  )
}
