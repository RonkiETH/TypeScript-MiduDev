type Hero = {
    readonly id?: `${string}-${string}-${string}-${string}-${string}`,
    name: string,
    age: number,
    isActive?: boolean
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero

    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

type Color = `#${string}`;

const hexadecimalColor: Color = '#ff0000';

// 3 en Línea
type CellValue = 'X' | 'O' | ''
const gameBoard: [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
] = [
    ['X', '', ''],
    ['', 'X', ''],
    ['', '', 'O']
]

type RGB = readonly [number, number, number];

const black: RGB = [0, 0, 0]
const white: RGB = [255, 255, 255]

type Coordinates = [number, number]

const point = [3.14, 2.71, 3]

// black.push(4) - NO SE PUEDE

// ENUMS
const enum ERROR_TYPES{
    NOT_FOUND = 'notFound', // 0
    UNAUTHORIZED = 'unauthorized', // 1
    FORBIDDEN = 'forbidden' // 2
}

function mostrarMensaje (tipoDeError: ERROR_TYPES) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
        console.log('No se encontró el recurso')
    } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permiso para acceder')
    } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permiso para acceder')
    }
}

const canvas = document.getElementById('canvas')

if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
}

// Fetching de datos en TypeScript
const API_URL = "https://api.github.com/search/repositories?q=javasacript";

export type GitHubAPIResponse = {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}

export type Item = {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Owner;
    html_url:                    string;
    description:                 null | string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null | string;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    Language | null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License | null;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      string[];
    visibility:                  Visibility;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              DefaultBranch;
    score:                       number;
}

export const enum DefaultBranch {
    Chapter1 = "chapter1",
    Main = "main",
    Master = "master",
}

export const enum Language {
    CSS = "CSS",
    HTML = "HTML",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
}

export type License = {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     string;
    node_id: string;
}

export type Owner = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    site_admin:          boolean;
}

export const enum Type {
    User = "User",
}

export const enum Visibility {
    Public = "public",
}

const response = await fetch(API_URL)

if (!response.ok) {
    throw new Error('Request Failed');
}

const data = await response.json() as GitHubAPIResponse

data.items.map(repo => {
    return {
        name: repo.name,
        id: repo.id,
        url: repo.html_url
    }
})

// Interfaces
interface Heroe {
    id: string,
    name: string,
    age: number,
    saludar: () => void
}

const hero: Heroe = {
    id: '1',
    name: 'Spiderman',
    age: 21,
    saludar: () => console.log("Hola")
}

interface Producto {
    id: number,
    nombre: string,
    precio: number,
    quantity: number
}

interface Zapatilla extends Producto {
    talla: number
}

interface CarritoDeCompras {
    totalPrice: number,
    productos: (Producto | Zapatilla)[]
}

interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,
    clear: () => void
}

// interface CarritoOps {
//     add(product: Producto) : void,
//     remove(id: number) : void,
//     clear() : void
// }

const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 100,
            quantity: 1,
            talla: 8
        }
    ]
}

// Narrowings
function mostrarLongitud (objeto: number | string) {
    if (typeof objeto === 'string') return objeto.length;

    return objeto.toString().length
}

mostrarLongitud('1');

interface Mario {
    nombre: string,
    saltar: () => void
}

interface Sonic {
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic

// Type Guard
// function checkIsSonic(personaje: Personaje): personaje is Sonic {
//     return (personaje as Sonic).correr !== undefined
// }
// function jugar(personaje: Personaje) {
//     // Esto valida que es Sonic
//     if (checkIsSonic(personaje)) {
//         personaje.correr()
//     }
// }

function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}
function jugar(personaje: Personaje) {
    // Esto valida que es Sonic
    if (checkIsSonic(personaje)) {
        personaje.correr()
        return
    } else {
        personaje.saltar();
        return
    }
    
}

function fn (x: string | number) {
    if (typeof x === 'string') {
        x.toUpperCase();
    } else if (typeof x === 'number') {
        x.toFixed(2)
    } else {
        x // Never
    }
}

interface Avengers{
    name: string,
    powerScore: number,
    wonBattles: number,
    age: number
}
import { type IAvenger } from "./types";
class Avenger implements IAvenger {
    // readonly name: string
    // #powerScore: number
    // readonly #wonBattles: number = 0

    name: string;
    powerScore: number;
    wonBattles: number;
    age: number;

    constructor(name: string, powerScore: number, wonBattles: number, age: number) {
        this.name = name;
        this.powerScore = powerScore;
    }

    get fullName() {
        return `${this.name}, poder ${this.powerScore}`;
    }

    set power(newPower: number) {
        if (newPower <= 100) {
            this.powerScore = newPower
        } else {
            throw new Error('Power Score cannot be more than 100')
        }
    }
}
