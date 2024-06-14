import { Blogs } from "../pages/Blogs";

export const Avatar = () => {
  const seed = [
    "Olivia",
    "Liam",
    "Emma",
    "Noah",
    "Ava",
    "Oliver",
    "Sophia",
    "Elijah",
    "Isabella",
    "William",
    "Charlotte",
    "James",
    "Amelia",
    "Benjamin",
    "Mia",
    "Lucas",
    "Harper",
    "Henry",
    "Evelyn",
    "Alexander",
    "Abigail",
    "Sebastian",
    "Ella",
    "Jack",
    "Avery",
    "Owen",
    "Scarlett",
    "Jackson",
    "Grace",
    "Mateo",
  ];
  const random = Math.floor(Math.random() * seed.length);
  const url = `https://api.dicebear.com/8.x/croodles/svg?seed=${seed[random]}`;
  console.log(typeof url);
  return (
    <div>
      <Blogs avatarUrl={url} />
    </div>
  );
};
