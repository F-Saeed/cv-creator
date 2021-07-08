import GeneralInfoInputs from './GeneralInfoInputs';
import './sass/GeneralInfo.scss';

const GeneralInfo = (props) => {
  const { infoChange, state } = props;

  return (
    <section className="general-info">
      <GeneralInfoInputs
        name="Name"
        id="name"
        infoChange={infoChange}
        state={state}
      />
      <GeneralInfoInputs
        name="Email"
        id="email"
        infoChange={infoChange}
        state={state}
      />
      <GeneralInfoInputs
        name="Phone Number"
        id="telephone"
        infoChange={infoChange}
        state={state}
      />
      <GeneralInfoInputs
        name="LinkedIn"
        id="linkedin"
        infoChange={infoChange}
        state={state}
      />
      <GeneralInfoInputs
        name="Github"
        id="github"
        infoChange={infoChange}
        state={state}
      />
    </section>
  );
};

export default GeneralInfo;
