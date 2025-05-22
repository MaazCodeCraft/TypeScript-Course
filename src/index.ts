type dragabble = {
    drag: () => void;
}

type resizeable = {
    resize: () => void;
}

type UIWidget = dragabble & resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}