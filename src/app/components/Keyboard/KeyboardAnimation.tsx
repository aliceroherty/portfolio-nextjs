"use client";

import { useFrame } from '@react-three/fiber'

const KeyboardAnimation = ({ mesh : Mesh}) => {

    // useFrame is a hook from react-three-fiber that allows you to run code on each frame
    useFrame(() => {
        mesh.current.rotation.y += 0.005
    })
}

export default KeyboardAnimation