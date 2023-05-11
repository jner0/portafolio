import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    //Aqui creamos nuestro 3D model esto viene de three fiber
    <mesh>
      <hemisphereLight
        intensity={0.15} 
        groundColor="black" 
      />
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={ isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
};

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //agrega un listener para los cambios en el tamaño de la pantalla
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    //seteamos el valor inicial de la variable del isMobile state
    setIsMobile(mediaQuery.matches);

    //definimos un callback function para manejar los cambios en el media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    //agregamos un callback como listener para los cambios en el media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //removemos el listener cuando el componente es desmontado
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position:[20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={ false }
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />
        <Computers
          isMobile={isMobile}
        />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;