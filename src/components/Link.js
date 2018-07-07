import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
color: ${props => props.active ? 'pink' : '#fff'};
height: 14px;
font-weight: 300;
line-height: 24px;
padding-right: 33px;
border-rigth: 1px dotted #fff;

&:hover{
	color: #8d8d8d;
	text-decoration: node;
}
&:last-child{
	border-rigth:none;
}
`

class Link extends React.Component{
	render(){
		return(
				<StyledLink href={this.prop.link}> {this.props.text} </StyledLink>
			)
	}
}

export default Link