function Greet({ name }: { name?: string }) {
  return <div>Hello {name ? name : "Guest"}</div>;
}

export default Greet;
