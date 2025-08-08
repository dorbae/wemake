// @NOTICE: You must define as default export for the route to work
export default function AboutUs() {
    return (
        <div>
            <h1>Tomato</h1>
        </div>
    )
}

export const links = () => [
    {rel: "stylesheet", href: "potato.com"}
];

export const meta = () => {
    return [
        {title: "Tomato"},
        {name: "description", content: "Tomato"},
    ];
};