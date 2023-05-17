import * as BABYLON from '@babylonjs/core';
import {ArcRotateCamera, CubeTexture, SceneLoader, Vector3} from '@babylonjs/core';
import '@babylonjs/loaders';

export default class BasicScene {

    private scene: BABYLON.Scene | undefined
    private engin: BABYLON.Engine | undefined


    start(canvas: HTMLCanvasElement) {
        if (this.engin) return;
        this.engin = new BABYLON.Engine(canvas)
        this.scene = this.createScene()
        // рекурсивно рендерим сцену при обновлении сцены
        this.engin.runRenderLoop(() => {
            this.scene?.render()
            // this.spaceship()

        })
    }

    createScene(): BABYLON.Scene {
        const scene = new BABYLON.Scene(this.engin!)
        const camera: BABYLON.ArcRotateCamera = new ArcRotateCamera(
            'camera',
            // координаты камеры, ось Z приближение
            -Math.PI / 2,
            Math.PI / 2,
            70,
            Vector3.Zero(),
            scene
        );
        // вращение камеры и скорость вращения
        camera.useAutoRotationBehavior = true
        //отключить контроль
        scene.detachControl()
        //привязываем управление камерой на мышь и клаву
        // camera.attachControl()


        //задний фон
        const envTex = CubeTexture.CreateFromPrefilteredData(
            './environment/space.env',
            scene
        );
        scene.environmentTexture = envTex;
        scene.createDefaultSkybox(envTex, true);


        // создаем землю - имя опции сцена
        // const ground: BABYLON.GroundMesh = BABYLON.MeshBuilder.CreateGround(
        //     'ground', {width: 10, height: 10, subdivisions: 20}, scene
        // )
        // const ball = BABYLON.MeshBuilder.CreateSphere('ball', {
        //     diameter: 2
        // }, scene)
        // //приподнять шар
        // ball.position.y = 1

        // eslint-disable-next-line
        const spaceship = SceneLoader.ImportMesh(
            '',
            './model/',
            '22.gltf'
        );

        // даем свет
        // eslint-disable-next-line
        const light: BABYLON.DirectionalLight = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(1, -1, 0), scene)

        return scene;
    }
}