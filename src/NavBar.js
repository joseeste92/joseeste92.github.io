var React = require('react');
import './NavBar.css';

var NavBar = React.createClass({
    render:function(){
             return(
                <nav>
                    <ul>
                     <li class="icon">
                        <a href="javascript:void(0);">&#9776;</a>
                     </li>
                     <li><a href="#">Text</a></li>
                     <li><a href="#">Twitter</a></li>
                     <li><a href="#">Carrousel</a></li>
                     <li><a href="#">Share</a></li>
                    </ul>
                </nav>
             )
         }
    });

module.exports = NavBar;