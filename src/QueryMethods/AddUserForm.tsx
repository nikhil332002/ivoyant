import { useAddUserMutation } from "./ApiSlice";
import { User } from "./types";

const AddUserForm: React.FC = () => {
    const [addUser] = useAddUserMutation();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const newUser: Partial<User> = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
      };
      try {
        await addUser(newUser).unwrap();
      } catch (err) {
        console.error('Failed to add user:', err);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <button type="submit">Add User</button>
      </form>
    );
  };
  
  export default AddUserForm;