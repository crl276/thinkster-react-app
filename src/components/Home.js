import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	appName: state.appName
});