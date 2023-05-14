import * as BABYLON from '@babylonjs/core';
import {CubeTexture, SceneLoader} from '@babylonjs/core';

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
        })
    }

    createScene(): BABYLON.Scene {
        const scene = new BABYLON.Scene(this.engin!)
        const camera: BABYLON.UniversalCamera = new BABYLON.UniversalCamera(
            'camera',
            // координаты камеры, ось Z приближение
            new BABYLON.Vector3(0, 1, -10),
            scene
        );
        //привязываем управление камерой на мышь и клаву
        camera.attachControl()


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

        const spaceship = SceneLoader.ImportMesh('', './model/', 'UFO.glb', scene, () => {
            console.log('1111')
        })


        // даем свет
        const light: BABYLON.DirectionalLight = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(1, -1, 0), scene)

        return scene;
    }
}