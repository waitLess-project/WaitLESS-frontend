import { Component } from "react";
import './not-found.style.css';

/**
 * TODO:: Update 404 message
 */
export default class NotFoundModule extends Component {
    render() {
        return (
            <div class="error-404">
                <h1 class="title3">SOMETHING'S NOT RIGHT. PLEASE TRY THAT ONE MORE TIME.</h1>
                <p>It appears we cannot find the contents of this page. A team of highly sophisticated pandas have been notified.</p>

                <div class="error-404__options">
                    <button class="button button__secondary">BACK</button>
                    <button class="button button__secondary" href="/">HOME</button>
                </div>
            </div>
        )
    }
}