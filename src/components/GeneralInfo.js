import GeneralInfoInputs from './GeneralInfoInputs';
import './sass/GeneralInfo.scss';

const GeneralInfo = () => {
  return (
    <section className="general-info">
      <GeneralInfoInputs type="text" name="Name" />
      <GeneralInfoInputs type="email" name="Email" />
      <GeneralInfoInputs type="tel" name="Phone Number" />
    </section>
  );
};

export default GeneralInfo;
