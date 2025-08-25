// src/pages/termos-de-uso.tsx
import { NextPage } from "next";

const TermosDeUso: NextPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Cabeçalho */}
        <h1 className="text-3xl font-bold  mb-2">Termos de Uso</h1>
        <p className="text-sm  mb-10">Última atualização: [DATA]</p>

        {/* Conteúdo */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar a plataforma <strong>Trinity</strong>
              {" ("}“Serviço”{")"}, você concorda em cumprir e estar vinculado a
              estes Termos de Uso. Se você não concordar com qualquer parte
              destes termos, não deve usar nosso serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Descrição do Serviço
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Integração com WhatsApp Business API através da Meta Cloud API
              </li>
              <li>
                Automação de mensagens e chatbots com inteligência artificial
              </li>
              <li>Ferramentas de gestão de relacionamento com clientes</li>
              <li>Integração com sistemas de CRM e marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Uso Permitido</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Comunicação comercial legítima via WhatsApp</li>
              <li>Automação de atendimento ao cliente</li>
              <li>Gestão de relacionamento com leads e clientes</li>
              <li>Integração com suas ferramentas de negócio existentes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Uso Proibido</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Spam ou mensagens não solicitadas sem opt-in explícito</li>
              <li>Violação das Políticas do WhatsApp Business da Meta</li>
              <li>Envio de conteúdo ilegal ou ofensivo</li>
              <li>Compartilhamento de credenciais de acesso com terceiros</li>
              <li>Uso para fins pessoais não comerciais</li>
              <li>Engenharia reversa ou tentativas de hack</li>
              <li>Violação de leis locais, estaduais ou federais</li>
              <li>Mensagens de phishing ou tentativas de fraude</li>
            </ul>
          </section>

          {/* --- Repete o mesmo padrão até o item 14 --- */}

          <section>
            <h2 className="text-xl font-semibold mb-2">14. Contato</h2>
            <p>Para questões sobre estes termos, entre em contato:</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:legal@trinityplatform.com.br"
                  className="text-blue-600 hover:underline"
                >
                  legal@trinityplatform.com.br
                </a>
              </li>
              <li>Telefone: +55 (XX) XXXX-XXXX</li>
              <li>Endereço: [SEU ENDEREÇO COMPLETO]</li>
            </ul>

            <div className="mt-6">
              <p className="font-medium">Trinity Platform Ltda.</p>
              <p>CNPJ: XX.XXX.XXX/0001-XX</p>
              <p>[Endereço completo]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermosDeUso;
