const Card = ({ title, url, author }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{url}</p>
      <p>{author}</p>
    </div>
  );
};

export default Card;
