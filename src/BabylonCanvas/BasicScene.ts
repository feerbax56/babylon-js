import * as BABYLON from '@babylonjs/core';

export default class BasicScene {

    private scene: BABYLON.Scene
    private engin: BABYLON.Engine

    constructor(canvas: HTMLCanvasElement) {
        this.engin = new BABYLON.Engine(canvas)
        this.scene = this.createScene()
        // рекурсивно рендерим сцену при обновлении сцены
        this.engin.runRenderLoop(() => {
            this.scene.render()
        })
    }

    createScene(): BABYLON.Scene {
        const scene = new BABYLON.Scene(this.engin)
        const camera: BABYLON.UniversalCamera = new BABYLON.UniversalCamera(
            'camera',
            // координаты камеры, ось Z приближение
            new BABYLON.Vector3(0, 1, -3),
            this.scene
        );
        //привязываем управление камерой на мышь и клаву
        camera.attachControl()

        // создаем землю - имя опции сцена
        const ground: BABYLON.GroundMesh = BABYLON.MeshBuilder.CreateGround(
            'ground', {width: 10, height: 10, subdivisions: 20}, this.scene
        )
        const ball = BABYLON.MeshBuilder.CreateSphere('ball', {
            diameter: 2
        }, this.scene)

        // даем свет
        const light: BABYLON.DirectionalLight = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(1, 0, 0), this.scene)

        return scene;
    }
}