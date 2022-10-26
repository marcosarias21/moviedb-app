const Container = ({ children, className }) => {
  return (
    <div className={`d-flex justify-content-center flex-wrap gx-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
