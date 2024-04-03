import React from 'react';

function Footer() {
    return (
        <div className="flex flex-row justify-between p-8">
            <div>
                <ul>
                    <li>Good Vibes Inc.</li>
                    <li>203-448-1029</li>
                    <li>927 Hype Park Place, Coquitlam BC</li>
                </ul>
            </div>
            <div className="text-right">
                <ul>
                    <li>Hours of Operation:</li>
                    <li>Monday - Friday: 8AM - 9PM</li>
                    <li>Saturday - Sunday: Closed</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;

