import { motion } from 'framer-motion';
import { SyntheticEvent } from 'react';
import Button from '../../../../components/basic/Button';
import InputField from '../../../../components/basic/InputField';
import TextField from '../../../../components/basic/TextField';
import { footerVariants } from '../../../../helper/Motion';

const Form = () => {
  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(data));
  };

  return (
    <motion.form
      variants={footerVariants(0.6)}
      id="contact-form"
      className="grid gap-6 sm:w-96 text-black"
      onSubmit={handleFormSubmit}
    >
      <input type="hidden" name="contact_number" />
      <div className="grid gap-6 grid-cols-2">
        <InputField
          type="text"
          name="name"
          label="Name"
          required
          placeholder="Enter Your Name"
        />
        <InputField
          type="text"
          name="Number"
          label="Phone Number"
          required
          pattern="[7-9]{1}[0-9]{9}"
          title="Number with 10 digits"
          placeholder="Phone"
        />
      </div>
      <TextField
        name="message"
        label="Message"
        required
        placeholder="Type your query here"
        minLength={10}
      />
      <div>
        <Button>Send Message</Button>
      </div>
    </motion.form>
  );
};

export default Form;
