import './sass/inputs.scss';

const GeneralInfoInputs = (props) => {
  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;

    props.infoChange(currentValue, id);
  };

  const { name, id, state } = props;

  return (
    <div className="general-input">
      <h3>{name}:</h3>
      <input id={id} value={state.generalInfo[id]} onChange={handleChange} />
    </div>
  );
};

export default GeneralInfoInputs;
