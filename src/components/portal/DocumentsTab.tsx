'use client';

import React, { useState } from 'react';
import { MOCK_DOCUMENTS } from '@/lib/mockData';
import { DocumentItem } from '@/lib/types';
import { UploadCloud, FileText, FileCode, CheckCircle2, Download, Filter } from 'lucide-react';

export const DocumentsTab: React.FC = () => {
  const [docs, setDocs] = useState<DocumentItem[]>(MOCK_DOCUMENTS);
  const [isUploading, setIsUploading] = useState(false);

  const handleSimulateUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      const newDoc: DocumentItem = {
        id: `doc-${Date.now()}`,
        fileName: `Extrato_OFX_Novo_Recebimento_${Date.now().toString().slice(-4)}.ofx`,
        fileType: 'OFX',
        fileSize: '512 KB',
        category: 'Extrato Bancário',
        uploadedAt: 'Agora mesmo',
      };
      setDocs([newDoc, ...docs]);
      setIsUploading(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header and Upload Dropzone */}
      <div className="glass-panel p-6 rounded-2xl border border-concept-border text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-concept-accent/15 border border-concept-accent/40 flex items-center justify-center mx-auto text-concept-accent">
          <UploadCloud className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Central de Documentos & Extratos OFX</h2>
          <p className="text-xs text-concept-muted max-w-md mx-auto">
            Envie extratos bancários em formato OFX, comprovantes de repasse e notas fiscais diretamente para o time de BPO da Concept Gestão.
          </p>
        </div>

        <button
          onClick={handleSimulateUpload}
          disabled={isUploading}
          className="glow-cyan-button px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2"
        >
          <UploadCloud className="w-4 h-4" />
          <span>{isUploading ? 'Enviando Extrato...' : 'Simular Upload de Extrato OFX / PDF'}</span>
        </button>
      </div>

      {/* Document Roster */}
      <div className="glass-panel rounded-2xl border border-concept-border overflow-hidden">
        <div className="p-4 border-b border-concept-border flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Documentos Disponíveis ({docs.length})</h3>
          <span className="text-xs text-concept-muted">Armazenamento Seguro LGPD</span>
        </div>

        <div className="divide-y divide-concept-border/40">
          {docs.map((doc) => (
            <div key={doc.id} className="p-4 hover:bg-concept-slate/30 transition-colors flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-concept-dark border border-concept-border flex items-center justify-center font-bold text-xs text-concept-accent">
                  {doc.fileType === 'OFX' ? <FileCode className="w-5 h-5 text-emerald-400" /> : <FileText className="w-5 h-5 text-concept-blue" />}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{doc.fileName}</h4>
                  <div className="flex items-center gap-3 text-[10px] text-concept-muted mt-0.5">
                    <span className="text-concept-accent font-semibold">{doc.category}</span>
                    <span>Tamanho: {doc.fileSize}</span>
                    <span>Enviado: {doc.uploadedAt}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verificado BPO
                </span>
                <button className="p-2 rounded-lg bg-concept-slate hover:bg-concept-border text-white text-xs">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
