import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="140"
        visible={true}
      />
    </div>
  );
};
