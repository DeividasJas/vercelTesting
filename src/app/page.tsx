import { getUsers, postUser } from '@/actions/serverActions';



export default function Home() {
  return (
    <div>
      <button onClick={getUsers} className='border'>
        Get all users
      </button>
      <button onClick={postUser} className='border'>
        create user
      </button>
    </div>
  );
}
