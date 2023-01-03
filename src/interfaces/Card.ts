export type Type = 'Magia' | 'Criatura'

export type Class = 'Mago' | 'Paladino' | 'Caçador' | 'Druida' | 'Qualquer'

export interface Card {
    id: number
    name: string
    description: string
    attack: number
    defence: number
    type: Type
    class: Class
}