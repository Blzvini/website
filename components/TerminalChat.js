import { useState, useEffect, useRef } from 'react';
import styles from './TerminalChat.module.css';

const INITIAL_BOT = {
  id: 0,
  type: 'bot',
  text: 'Olá! Pode me perguntar qualquer coisa — estou aqui pra te contar sobre o Vinicius. 👋',
};

const SCRIPT = [
  {
    userText: 'Quem é Vinicius Marques?',
    botText:  'Sou Vinicius Marques — formado em Análise e Desenvolvimento de Sistemas. Comecei em dev, passei por QA e hoje estou 100% focado em dados: pipelines, modelagem e cloud.',
  },
  {
    userText: 'Quais tecnologias ele usa?',
    botText:  'PySpark · SQL · Microsoft Fabric · Azure · ETL · Power Platform. Visão completa do ciclo: dado bruto → dashboard na mão do gestor.',
  },
  {
    userText: 'Quais são os objetivos dele?',
    botText:  'Uma vaga como Engenheiro de Dados Jr. em time que valorize qualidade técnica, autonomia e aprendizado contínuo. Stacks modernas + cultura de engenharia forte.',
  },
  {
    userText: 'E fora do trabalho?',
    botText:  'Trilhas, jazz a metal, games indie retrô, leitura técnica e séries até tarde. Interesses variados constroem soluções mais criativas. 🎮',
  },
];

// phase: 'typing-input' | 'ready' | 'responding' | 'done'

export default function TerminalChat() {
  const [messages,      setMessages]      = useState([INITIAL_BOT]);
  const [scriptIdx,     setScriptIdx]     = useState(0);
  const [phase,         setPhase]         = useState('typing-input');
  const [inputText,     setInputText]     = useState('');
  const [botTyping,     setBotTyping]     = useState('');
  const [showHint,      setShowHint]      = useState(false);
  const [hintDone,      setHintDone]      = useState(false);

  const scrollRef   = useRef(null);
  const timerRef    = useRef(null);
  const intervalRef = useRef(null);
  // store typeInput in ref so mount effect doesn't need it as dep
  const typeInputRef = useRef(null);

  const typeInput = (idx) => {
    clearInterval(intervalRef.current);
    if (idx >= SCRIPT.length) { setPhase('done'); return; }
    const text = SCRIPT[idx].userText;
    setInputText('');
    setPhase('typing-input');
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      setInputText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(intervalRef.current);
        setPhase('ready');
      }
    }, 26);
  };
  typeInputRef.current = typeInput;

  useEffect(() => {
    typeInputRef.current(0);
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(intervalRef.current);
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, botTyping, phase]);

  // Mostra hint na primeira vez que o input fica pronto
  useEffect(() => {
    if (phase === 'ready' && scriptIdx === 0 && !hintDone) {
      const t = setTimeout(() => setShowHint(true), 600);
      return () => clearTimeout(t);
    }
  }, [phase]); // eslint-disable-line

  const handleSend = () => {
    if (phase !== 'ready') return;

    // Dispensa hint na primeira interação
    if (showHint && !hintDone) {
      setHintDone(true);
      setTimeout(() => setShowHint(false), 340);
    }

    const current = SCRIPT[scriptIdx];

    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: current.userText }]);
    setInputText('');
    setPhase('responding');

    const botText = current.botText;
    timerRef.current = setTimeout(() => {
      let i = 0;
      setBotTyping('');
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        i++;
        setBotTyping(botText.slice(0, i));
        if (i >= botText.length) {
          clearInterval(intervalRef.current);
          setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botText }]);
          setBotTyping('');
          const next = scriptIdx + 1;
          setScriptIdx(next);
          timerRef.current = setTimeout(() => typeInputRef.current(next), 320);
        }
      }, 18);
    }, 720);
  };

  const handleRestart = () => {
    clearTimeout(timerRef.current);
    clearInterval(intervalRef.current);
    setMessages([INITIAL_BOT]);
    setScriptIdx(0);
    setInputText('');
    setBotTyping('');
    typeInputRef.current(0);
  };

  const isResponding = phase === 'responding';
  const isDone       = phase === 'done';

  return (
    <div className={styles.chat}>

      {/* ─── Header ─── */}
      <div className={styles.header}>
        <span className={styles.onlineDot} aria-hidden="true" />
        <span className={styles.headerName}>Vini.exe</span>
        <span className={styles.headerRole}>Ask me</span>
      </div>

      {/* ─── Mensagens ─── */}
      <div
        className={styles.messages}
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Conversa com Vinicius"
      >
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`${styles.bubble} ${msg.type === 'user' ? styles.bubbleUser : styles.bubbleBot}`}
          >
            {msg.text}
          </div>
        ))}

        {/* Indicador de digitação */}
        {isResponding && botTyping === '' && (
          <div className={`${styles.bubble} ${styles.bubbleBot}`} aria-label="Vinicius está digitando">
            <span className={styles.typingDots} aria-hidden="true">
              <span /><span /><span />
            </span>
          </div>
        )}

        {/* Resposta sendo digitada */}
        {isResponding && botTyping !== '' && (
          <div className={`${styles.bubble} ${styles.bubbleBot}`} aria-live="off">
            {botTyping}<span className={styles.cursor} aria-hidden="true">▋</span>
          </div>
        )}
      </div>

      {/* ─── Input ─── */}
      <div className={styles.inputArea}>
        {isDone ? (
          <button type="button" className={styles.restartBtn} onClick={handleRestart}>
            Recomeçar conversa ↺
          </button>
        ) : (
          <>
            <div
              className={styles.inputDisplay}
              aria-label={`Pergunta pré-selecionada: ${inputText}`}
              aria-readonly="true"
            >
              <span>{inputText}</span>
              <span
                className={`${styles.inputCursor}${phase === 'ready' ? ` ${styles.inputCursorBlink}` : ''}`}
                aria-hidden="true"
              >|</span>
            </div>
            <div className={styles.sendBtnWrap}>
              {showHint && (
                <span
                  className={`${styles.sendHint}${hintDone ? ` ${styles.sendHintOut}` : ''}`}
                  aria-hidden="true"
                >!</span>
              )}
              <button
                type="button"
                className={styles.sendBtn}
                onClick={handleSend}
                disabled={phase !== 'ready'}
                aria-label="Enviar pergunta"
              >
                ➜
              </button>
            </div>
          </>
        )}
      </div>

    </div>
  );
}
