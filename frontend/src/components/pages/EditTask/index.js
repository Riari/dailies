import { Component } from 'preact';
import DefaultLayout from '../../layouts/Default';

class EditTask extends Component {
  render = (props, state) => {
    return (
      <DefaultLayout heading="New task">
        <div></div>
      </DefaultLayout>
    )
  }
}

export default EditTask;
