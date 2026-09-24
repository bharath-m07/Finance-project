// type ClientAppProps = {
//   onLogout: () => void;
// };

// export default function ClientApp({ onLogout }: ClientAppProps) {
//   return (
//     <div>
//       <h1>Client Dashboard</h1>

//       <button onClick={onLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }

// type Props = {
//   onLogout: () => void;
// };

// export default function ClientApp({ onLogout }: Props) {
//   return (
//     <div>
//       <h1>Client Dashboard</h1>

//       <button onClick={onLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }

type Props = {
  onLogout: () => void;
};

export default function ClientApp({ onLogout }: Props) {
  return (
    <div>
      <h1>Client Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}