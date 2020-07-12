import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CircularProgress from '@material-ui/core/CircularProgress';


export default class RegistrationForm extends Component {
  state = {
    loading: false,
    data: {
      name: '',
      surName: '',
      city: '',
      phone: '',
    },
    error: false
  };
  ChangeFunc = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
      error: false
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.dataSubmit();
  };
  dataSubmit = () => {

    const error = this.validateForm(this.state.data);
    this.setState({
      error
    });
    if (!error) {
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
          data: {
            name: '',
            surName: '',
            city: '',
            phone: ''
          }
        });
      }, 1000);
    }
  };

  validateForm = (data) => {
    if (!data.name || !data.surName || !data.phone) {
      return true
    }
    return false
  };

  render() {

    console.log(this.state);
    const { loading, data, error } = this.state;
    const errorText = 'This field is empty';
    return (
      <Box mt={4} display='flex' justifyContent='center'>
        <form onSubmit={this.onSubmit} noValidate>
          <Box mb={2}>
            <TextField
              required
              label="Name"
              variant="outlined"
              type='text'
              name='name'
              onChange={this.ChangeFunc}
              error={!data.name && error}
              helperText={!data.name && error ? errorText : ''}
              value={data.name}
            />
          </Box>
          <Box mb={2}>
            <TextField
              required
              label="Last Name"
              variant="outlined"
              type='text'
              name='surName'
              onChange={this.ChangeFunc}
              helperText={!data.surName && error ? errorText : ''}
              error={!data.surName && error}
              value={data.surName} />

          </Box>
          <Box mb={2}>
            <TextField
              label="City"
              variant="outlined"
              type='text'
              name='city'
              onChange={this.ChangeFunc}
              value={data.city} />
          </Box>
          <Box mb={2}>
            <TextField
              required
              label="Phone"
              variant="outlined"
              type='text'
              name='phone'
              onChange={this.ChangeFunc}
              error={!data.phone && error}
              helperText={!data.phone && error ? errorText : ''}
              value={data.phone} />
          </Box>
          <Box display='flex' justifyContent='center'>
            <Button variant="contained" color="primary" type='submit'
              disabled={loading ? true : false}>
              {loading ? <CircularProgress color="secondary" size={24} /> : 'Зарегистрироваться'}
            </Button>
          </Box>
        </form>
      </Box>
    );
  }
}