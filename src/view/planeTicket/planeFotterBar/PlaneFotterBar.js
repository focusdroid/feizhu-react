import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import './planeBar.scss'

export default class PlaneFotterBar extends Component{
  render(){
    return(<Fragment>
      <footer>
        <div className='foot'>
          <ul className='foot-ul'>
            <li>
              <Link to='/planeticket/test'>
                <div className='foot-box'>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEVHcEw8PDw8PDw8PDw8PDw6Ojo8PDw6Ojo8PDw8PDw1NTU8PDw8PDw7Ozs9PT07Ozs9PT3ZhcxNAAAAEHRSTlMA7ElsvSKBFNHdBqb0MY9e1WE8IQAAAVJJREFUSMfdVUmChCAMlD1h0fr/awe7kcFuETzOcBOrslbCsvzL46QNFCOTtmkCbRnNYesG8AiIsCXj85dRGojrDWUTiEGeLCiGUD3z2Z7+MuctQOYST4jb1Q/DYHeJZ9N1fcHQoH52+af/uLKXbmsiGuv5JiGa23oLnKq3ELb7hipQ+ymhRxKgkwv6cHjV1NZFAqest64XHSlIAdOUKL6k1iMUJaomIrByd4RdU795GmD1+3WfkFuxosZEsMd1n7AHrs8lHhFqLY+mDQkK4aUTIM0R0jumXB0/R/AQR9HmCK4QaD4kKn1Wj5LelTRH4BLKEh42bh+nKWmIOsRJzIhPNJvWhbG8P5aKsVr0Byjj75fE1/ITUI9eDC4dmLXP0P4BXsYRXpZHiPZ5MeE9wHenPlrsZYaL4c46GpKxmRXcMk/Ij+JM+WtINNksSU3Sf+D8AH97E6bTFkwzAAAAAElFTkSuQmCC" alt=""/>
                  <p>联系飞猪</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/planeticket/test'>
                <div className='foot-box'>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAgVBMVEUAAAA/Pz89PT09PT0+Pj49PT1CQkJOTk4/Pz9OTk4+Pj49PT09PT09PT09PT0/Pz9JSUk9PT09PT0+Pj5EREQ+Pj4+Pj4+Pj49PT0+Pj4+Pj49PT0+Pj4/Pz8/Pz9EREQ+Pj4+Pj4+Pj4/Pz9BQUE/Pz8+Pj4/Pz8+Pj49PT09PT326XdFAAAAKnRSTlMAMRn7TvAjA2sH566H97w4C+vEqRbaop2VdEje0j4fEM7NtVssgn96cmDnt6wKAAABlUlEQVQ4y72TWXKrMBAAh0XsqzEYDCbesvX9D/ggj8ImMfJX0h8gVbU0Gs1IfhHXNIyt3LE1DNP9oaW7HCCojf9zow4A8l260MyCmWo7bFYxU5g3zwggDj3b9s4WtI7TgnUe52EMgTF7CqppXR9CnkPYT7EqUJOZlViezLwDvA8DpyxD2xXPosxkpIZG7viAj69AFnBypIH6a/OYRBZE0XQ/h0gROJIQjwd7g1TW6I9sJIW3YbzhJOuYObaMtmQWkWh4pZAIKxMHLjrxQCcXcCSFvU58sVrZQyoG2KLd8io2XMUET57ggSmSUzwTC/LhW6EyvZcpquFnQ6MXmymNDuXoPEfRycgeTpkm8Gm+wAgSf83zE+bSuWfYvKzc9wbO7v2qznzYE90yml9A6zzIo4VicSq3vj2i5aOr3R/thDp8q7KC14cFjRftYccrbXCxsD5v089hutKp+xiau7rFq42aKojmIqhUVrkGsHNF3B0EV9HQlxD6fghlL1q2R0gSOG410lzcufRa/HCM/twbMxny+QP+AXioK6KBGKgdAAAAAElFTkSuQmCC" alt=""/>
                  <p>我的收藏</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/planeticket/test'>
                <div className='foot-box'>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURQAAAD09PT09PT09PT09PU5eQBsAAAAEdFJOUwDMYC0LBD5sAAAAZElEQVQoz2NgAAMVFzBQYEAGEDEXB1RBMMmCEFR0EUAIijiCjWByQRF0cQKxGJ1QzGRyhBuEZLsLmukIOwdekBHqeAGCgiPdSY5ECQ5cbIKTIgJAkiKTCypwgiZvZOCImkMQAAApPC6p4AfqUAAAAABJRU5ErkJggg==" alt=""/>
                  <p>订单·退改签·报销</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>);
  }
}
