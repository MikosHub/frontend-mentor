const LinkIcon = ({ href, icon }) => {
  return (
    <a href={href}>
      <img src={icon} alt="" />
    </a>
  );
};

export default LinkIcon;
