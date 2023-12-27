import { render } from '@testing-library/react';

export default function Audicar(props) {
  const textColorClass = props.color === 'red' ? 'redColor' : '';
  return (
    <div>
      {
        props.color && (
        <>
          <h1>Audicar color</h1>
          <h2 className={textColorClass}>{props.color}</h2>
        </>
      )}
      {
        props.chessNO && (
        <>
          <h1>Audicar chessNO</h1>
          <h2 >{props.chessNO}</h2>
        </>
      )}
      {
        props.ModelNo && (
        <>
          <h1>Audicar ModelNo</h1>
          <h2>{props.ModelNo}</h2>
        </>
      )}
    </div>
  );
}
