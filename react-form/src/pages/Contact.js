import React from 'react'
import { Formik, Form, Field} from 'formik'

import Input from '../components/forms/input'
import File from '../components/forms/File'
import Checkbox from '../components/forms/Checkbox'

export default function Contact() {
  return (
    <div>
      <h3>Contact page</h3>
      
      <Formik 
        initialValues={{
          name: "Zaur",
          about: '',
          gender: 1,
          accept: false,
          skills: [],
          file: ''
        }}

        onSubmit={values => {
          console.log(values)
        }}
      >
        {({values}) => (
          <Form>
            <Input name="name" label="Name: "/> <br/>
              <Field name="about" component="textarea" cols="20" rows="20"/><br/>
              {/* <label>
                <Field type="checkbox" name="accept"/>
                Accept
              </label> <br/> */}

              <Checkbox label="Accept" name="accept"/>

              <Field component="select" name="gender">
                <option value={1}>Male</option>
                <option value={2}>Female</option>
              </Field> <br/>

              <Field component="select" name="skills" multiple={true}>
                <option value="html">html</option>
                <option value="css">css</option>
                <option value="asp">asp</option>
                <option value="js">js</option>
              </Field> <br/>


              <File name="file"/>

            <button disabled={!values.accept} type='submit'>Send</button>
          </Form>


        )}

      </Formik>
      
      
      </div>
  )
}
