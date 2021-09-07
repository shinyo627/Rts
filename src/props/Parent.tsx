import { ChildAsFC } from './Child'

const Parent = () => {
  return <ChildAsFC color='black' onClick={() => console.log('Click')} >
    </ChildAsFC>
}