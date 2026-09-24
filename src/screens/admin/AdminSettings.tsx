// export default function AdminSettings() {
//   return (
//     <div>
//       <h2>Admin Settings</h2>
//     </div>
//   );
// }

type Props = {
  onLogout: () => void;
};

export default function AdminSettings({ onLogout }: Props) {
  return (
    <div>
      <h2>Settings</h2>

      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
