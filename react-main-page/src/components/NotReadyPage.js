import {Link} from "react-router-dom";
import "css/NotReadyPage.css";

function NotReadyPage(props)
{
	return(
		<div className = "not-ready-page">
			<div className = "page-wrapper">
				<div className = "page-message">
					Sorry, this page is not ready yet
				</div>
				<Link to = "/demo">
					<div className = "back-link">
						Go to the demo-page
					</div>
				</Link>
			</div>
		</div>
	)
}

export default NotReadyPage;