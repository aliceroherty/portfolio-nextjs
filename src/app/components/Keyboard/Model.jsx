"use client";

import React from 'react'
import PropTypes from 'prop-types'
import { useGLTF } from '@react-three/drei'

Model.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    setMesh: PropTypes.func,
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.number,
};

export function Model({ position, setMesh, rotation, scale }) {
    // These props are also custom

    const { nodes, materials } = useGLTF('/assets/keyboard.glb');
    return (
        <group dispose={null}>
            <group
                // These props were defined by me.
                // When regenerating the model, these props will be lost.
                rotation={rotation}
                scale={scale}
                position={position}
                ref={setMesh}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials['Material.060']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_2.geometry}
                    material={materials['Material.064']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_3.geometry}
                    material={materials['Material.069']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials['Material.001']}
                    position={[-3.491, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text100.geometry}
                        material={materials['Material.061']}
                        position={[-0.004, 3.85, -0.518]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials['Material.024']}
                    position={[-2.99, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text130.geometry}
                        material={materials['Material.061']}
                        position={[0.102, 3.894, -0.386]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text132.geometry}
                        material={materials['Material.061']}
                        position={[-0.118, 3.894, -0.407]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003.geometry}
                    material={materials['Material.023']}
                    position={[-2.488, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text128.geometry}
                        material={materials['Material.061']}
                        position={[0.152, 3.894, -0.356]}
                        scale={[0.246, 2.928, 0.315]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text129.geometry}
                        material={materials['Material.061']}
                        position={[-0.203, 3.894, -0.452]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials['Material.022']}
                    position={[-1.986, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text126.geometry}
                        material={materials['Material.061']}
                        position={[0.144, 3.894, -0.376]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text127.geometry}
                        material={materials['Material.061']}
                        position={[-0.218, 3.894, -0.41]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005.geometry}
                    material={materials['Material.021']}
                    position={[-1.485, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text124.geometry}
                        material={materials['Material.061']}
                        position={[0.16, 3.894, -0.401]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text125.geometry}
                        material={materials['Material.061']}
                        position={[-0.18, 3.894, -0.398]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                    material={materials['Material.025']}
                    position={[-0.983, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text122.geometry}
                        material={materials['Material.061']}
                        position={[0.263, 3.894, -0.372]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text123.geometry}
                        material={materials['Material.061']}
                        position={[-0.19, 3.894, -0.341]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007.geometry}
                    material={materials['Material.032']}
                    position={[-0.482, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text118.geometry}
                        material={materials['Material.061']}
                        position={[0.172, 3.894, -0.449]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text119.geometry}
                        material={materials['Material.061']}
                        position={[-0.171, 3.894, -0.376]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008.geometry}
                    material={materials['Material.033']}
                    position={[0.02, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text116.geometry}
                        material={materials['Material.061']}
                        position={[0.17, 3.894, -0.404]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text117.geometry}
                        material={materials['Material.061']}
                        position={[-0.207, 3.894, -0.442]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009.geometry}
                    material={materials['Material.040']}
                    position={[0.522, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text114.geometry}
                        material={materials['Material.061']}
                        position={[0.183, 3.894, -0.475]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text115.geometry}
                        material={materials['Material.061']}
                        position={[-0.153, 3.894, -0.408]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials['Material.041']}
                    position={[1.023, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text112.geometry}
                        material={materials['Material.061']}
                        position={[0.14, 3.894, -0.361]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text113.geometry}
                        material={materials['Material.061']}
                        position={[-0.185, 3.894, -0.44]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011.geometry}
                    material={materials['Material.050']}
                    position={[1.525, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text110.geometry}
                        material={materials['Material.061']}
                        position={[0.157, 3.894, -0.361]}
                        scale={[0.276, 2.928, 0.352]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text111.geometry}
                        material={materials['Material.061']}
                        position={[-0.158, 3.894, -0.407]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube012.geometry}
                    material={materials['Material.051']}
                    position={[2.026, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text108.geometry}
                        material={materials['Material.061']}
                        position={[0.069, 3.894, -0.22]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text109.geometry}
                        material={materials['Material.061']}
                        position={[-0.16, 3.894, -0.356]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013.geometry}
                    material={materials['Material.002']}
                    position={[-3.363, 0.497, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text095.geometry}
                        material={materials['Material.061']}
                        position={[-0.416, 3.85, -0.375]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014.geometry}
                    material={materials['Material.059']}
                    position={[2.528, 0.998, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text107.geometry}
                        material={materials['Material.061']}
                        position={[-0.181, 3.894, -0.412]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text142.geometry}
                        material={materials['Material.061']}
                        position={[0.105, 3.894, -0.412]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube015.geometry}
                    material={materials['Material.012']}
                    position={[-2.722, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text092.geometry}
                        material={materials['Material.061']}
                        position={[-0.043, 3.889, -0.306]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube016.geometry}
                    material={materials['Material.013']}
                    position={[-2.22, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text091.geometry}
                        material={materials['Material.061']}
                        position={[0.003, 3.889, -0.365]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube017.geometry}
                    material={materials['Material.014']}
                    position={[-1.719, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text090.geometry}
                        material={materials['Material.061']}
                        position={[0.039, 3.889, -0.344]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018.geometry}
                    material={materials['Material.020']}
                    position={[-1.217, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text089.geometry}
                        material={materials['Material.061']}
                        position={[-0.016, 3.889, -0.351]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials['Material.026']}
                    position={[-0.716, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text088.geometry}
                        material={materials['Material.061']}
                        position={[0.005, 3.889, -0.395]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube020.geometry}
                    material={materials['Material.031']}
                    position={[-0.214, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text087.geometry}
                        material={materials['Material.061']}
                        position={[-0.04, 3.889, -0.383]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube021.geometry}
                    material={materials['Material.034']}
                    position={[0.288, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text086.geometry}
                        material={materials['Material.061']}
                        position={[-0.003, 3.889, -0.267]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube022.geometry}
                    material={materials['Material.039']}
                    position={[0.789, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text085.geometry}
                        material={materials['Material.061']}
                        position={[-0.061, 3.889, -0.343]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube023.geometry}
                    material={materials['Material.042']}
                    position={[1.291, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text084.geometry}
                        material={materials['Material.061']}
                        position={[-0.036, 3.889, -0.343]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024.geometry}
                    material={materials['Material.049']}
                    position={[1.792, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text083.geometry}
                        material={materials['Material.061']}
                        position={[0.033, 3.889, -0.398]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube025.geometry}
                    material={materials['Material.052']}
                    position={[2.294, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text081.geometry}
                        material={materials['Material.061']}
                        position={[0.134, 3.889, -0.308]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text082.geometry}
                        material={materials['Material.061']}
                        position={[-0.052, 3.889, -0.296]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube026.geometry}
                    material={materials['Material.062']}
                    position={[2.796, 0.495, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text079.geometry}
                        material={materials['Material.061']}
                        position={[0.194, 3.889, -0.308]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text080.geometry}
                        material={materials['Material.061']}
                        position={[-0.026, 3.889, -0.296]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube027.geometry}
                    material={materials['Material.011']}
                    position={[-2.602, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text067.geometry}
                        material={materials['Material.061']}
                        position={[-0.002, 3.85, -0.311]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube028.geometry}
                    material={materials['Material.010']}
                    position={[-2.1, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text066.geometry}
                        material={materials['Material.061']}
                        position={[-0.038, 3.85, -0.347]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube029.geometry}
                    material={materials['Material.015']}
                    position={[-1.598, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text065.geometry}
                        material={materials['Material.061']}
                        position={[0.029, 3.85, -0.346]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube030.geometry}
                    material={materials['Material.019']}
                    position={[-1.097, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text064.geometry}
                        material={materials['Material.061']}
                        position={[0.022, 3.85, -0.369]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube031.geometry}
                    material={materials['Material.027']}
                    position={[-0.595, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text063.geometry}
                        material={materials['Material.061']}
                        position={[-0.029, 3.85, -0.343]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube032.geometry}
                    material={materials['Material.030']}
                    position={[-0.094, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text062.geometry}
                        material={materials['Material.061']}
                        position={[0.004, 3.85, -0.345]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube033.geometry}
                    material={materials['Material.035']}
                    position={[0.408, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text061.geometry}
                        material={materials['Material.061']}
                        position={[-0.052, 3.85, -0.153]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube034.geometry}
                    material={materials['Material.038']}
                    position={[0.91, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text060.geometry}
                        material={materials['Material.061']}
                        position={[-0.055, 3.85, -0.347]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube035.geometry}
                    material={materials['Material.043']}
                    position={[1.411, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text059.geometry}
                        material={materials['Material.061']}
                        position={[-0.082, 3.85, -0.311]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube036.geometry}
                    material={materials['Material.048']}
                    position={[1.913, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text055.geometry}
                        material={materials['Material.061']}
                        position={[0.139, 3.85, -0.369]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text056.geometry}
                        material={materials['Material.061']}
                        position={[0.139, 3.85, -0.222]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text057.geometry}
                        material={materials['Material.061']}
                        position={[-0.118, 3.85, -0.369]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text058.geometry}
                        material={materials['Material.061']}
                        position={[-0.12, 3.85, -0.212]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube037.geometry}
                    material={materials['Material.063']}
                    position={[2.414, -0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text052.geometry}
                        material={materials['Material.061']}
                        position={[0.172, 3.85, -0.451]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text053.geometry}
                        material={materials['Material.061']}
                        position={[0.116, 3.85, -0.451]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text054.geometry}
                        material={materials['Material.061']}
                        position={[-0.13, 3.85, -0.451]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube038.geometry}
                    material={materials['Material.009']}
                    position={[-2.34, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text040.geometry}
                        material={materials['Material.061']}
                        position={[0.002, 3.822, -0.33]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube039.geometry}
                    material={materials['Material.008']}
                    position={[-1.838, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text039.geometry}
                        material={materials['Material.061']}
                        position={[-0.015, 3.822, -0.332]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube040.geometry}
                    material={materials['Material.016']}
                    position={[-1.337, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text038.geometry}
                        material={materials['Material.061']}
                        position={[-0.019, 3.822, -0.331]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube041.geometry}
                    material={materials['Material.018']}
                    position={[-0.835, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text037.geometry}
                        material={materials['Material.061']}
                        position={[-0.016, 3.822, -0.365]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube042.geometry}
                    material={materials['Material.028']}
                    position={[-0.333, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text036.geometry}
                        material={materials['Material.061']}
                        position={[0.024, 3.822, -0.333]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043.geometry}
                    material={materials['Material.029']}
                    position={[0.168, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text035.geometry}
                        material={materials['Material.061']}
                        position={[-0.001, 3.822, -0.33]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube044.geometry}
                    material={materials['Material.036']}
                    position={[0.67, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text034.geometry}
                        material={materials['Material.061']}
                        position={[0.016, 3.822, -0.348]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube045.geometry}
                    material={materials['Material.037']}
                    position={[1.171, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text032.geometry}
                        material={materials['Material.061']}
                        position={[0.18, 3.822, -0.335]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text033.geometry}
                        material={materials['Material.061']}
                        position={[-0.159, 3.822, -0.195]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube046.geometry}
                    material={materials['Material.044']}
                    position={[1.673, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text030.geometry}
                        material={materials['Material.061']}
                        position={[0.165, 3.822, -0.335]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text031.geometry}
                        material={materials['Material.061']}
                        position={[-0.135, 3.822, -0.207]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube047.geometry}
                    material={materials['Material.047']}
                    position={[2.175, -0.503, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text028.geometry}
                        material={materials['Material.061']}
                        position={[0.18, 3.822, -0.313]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text029.geometry}
                        material={materials['Material.061']}
                        position={[-0.103, 3.822, -0.33]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube048.geometry}
                    material={materials['Material.005']}
                    position={[-3.422, -1.01, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text020.geometry}
                        material={materials['Material.061']}
                        position={[-0.288, 3.836, -0.176]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube049.geometry}
                    material={materials['Material.006']}
                    position={[-2.794, -1.01, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane001.geometry}
                        material={materials['Material.061']}
                        position={[-0.008, 3.861, -0.224]}
                        scale={[0.304, 3.324, 0.4]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube050.geometry}
                    material={materials['Material.007']}
                    position={[-2.166, -1.01, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text016.geometry}
                        material={materials['Material.061']}
                        position={[-0.019, 3.836, -0.115]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube051.geometry}
                    material={materials['Material.045']}
                    position={[1.57, -1.01, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text007.geometry}
                        material={materials['Material.061']}
                        position={[0.118, 3.835, -0.115]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube052.geometry}
                    material={materials['Material.046']}
                    position={[2.197, -1.01, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane.geometry}
                        material={materials['Material.061']}
                        position={[-0.004, 3.879, -0.227]}
                        scale={[0.292, 3.097, 0.43]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube053.geometry}
                    material={materials['Material.054']}
                    position={[2.824, -1.01, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text004.geometry}
                        material={materials['Material.061']}
                        position={[0.023, 3.835, -0.21]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube054.geometry}
                    material={materials['Material.055']}
                    position={[3.452, -1.01, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text001.geometry}
                        material={materials['Material.061']}
                        position={[-0.015, 3.835, -0.176]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube055.geometry}
                    material={materials['Material.004']}
                    position={[-3.177, -0.5, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text043.geometry}
                        material={materials['Material.061']}
                        position={[-1.056, 3.85, -0.262]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube056.geometry}
                    material={materials['Material.053']}
                    position={[3.09, -0.5, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text002.geometry}
                        material={materials['Material.061']}
                        position={[-0.048, 3.85, -0.262]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube057.geometry}
                    material={materials['Material.056']}
                    position={[3.21, 0.002, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text049.geometry}
                        material={materials['Material.061']}
                        position={[0.016, 3.85, -0.291]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube058.geometry}
                    material={materials['Material.057']}
                    position={[3.395, 0.496, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text077.geometry}
                        material={materials['Material.061']}
                        position={[0.195, 3.85, -0.39]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text078.geometry}
                        material={materials['Material.061']}
                        position={[-0.079, 3.85, -0.439]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube059.geometry}
                    material={materials['Material.058']}
                    position={[3.265, 0.994, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text003.geometry}
                        material={materials['Material.061']}
                        position={[-0.015, 3.85, -0.478]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube060.geometry}
                    material={materials['Material.003']}
                    position={[-3.306, -0.003, 0.282]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text069.geometry}
                        material={materials['Material.061']}
                        position={[-0.379, 3.85, -0.295]}
                        scale={[0.403, 4.274, 0.514]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube061.geometry}
                    material={materials['Material.017']}
                    position={[-0.289, -1.016, 0.28]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text009.geometry}
                        material={materials['Material.061']}
                        position={[-0.08, 3.922, -0.47]}
                        scale={[0.403, 4.274, 0.904]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube062.geometry}
                    material={materials['Material.055']}
                    position={[3.452, -1.009, 0.168]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube063.geometry}
                    material={materials['Material.002']}
                    position={[-3.363, 0.497, 0.165]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                />
                <group
                    position={[-0.056, 0.122, 0.17]}
                    rotation={[1.619, 0, 0]}
                    scale={[0.308, 0.029, 0.241]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube117.geometry}
                        material={materials['Material.067']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube117_1.geometry}
                        material={materials['Material.068']}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/assets/keyboard.glb');
