import { Popover } from "@headlessui/react"; // Importando o popover
import { X } from "phosphor-react"; // Importando o icone X da biblioteca phosphor react

// Função de fechar o botão
export function CloseButton() {
    return (
        <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário de feedback">
            <X weight="bold" className="w-4 h-4" />
        </Popover.Button>
    );
}