import { useState, useCallback, useRef } from "react";
import { produce } from "immer";
import { Button } from "../NumberToRoman/styles";
import { ButtonsDiv, GameOfLifeContainer } from "./styles";
import { ClientsTitle } from "../../components/Clients/styles";
import { toast } from "react-toastify";

//References: Ben Awad - React Hooks Project Tutorial - Game of Life

const numRows = 25;
const numCols = 25;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

const GameOfLife = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });
  const [columns, setColumns] = useState<number>(0)

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 500);
  }, []);

  return (
    <GameOfLifeContainer>
      <ClientsTitle>Jogo da Vida</ClientsTitle>
      <ButtonsDiv>
        <Button
          style={{ width: "100px" }}
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "Parar" : "Começar"}
        </Button>
        <Button
          style={{ width: "100px" }}
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
              );
            }
            toast.success("Tudo bagunçado, se divirta!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setGrid(rows);
          }}
        >
          Aleatorizar
        </Button>
        <Button
          style={{ width: "100px" }}
          onClick={() => {
            setGrid(generateEmptyGrid());
            toast.success("Grid limpo!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          Limpar
        </Button>
      </ButtonsDiv>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((cols, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
                setColumns(cols + columns)
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "green" : undefined,
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
      <ClientsTitle>
        Para voltar para Home, clicar no logo do desafio
      </ClientsTitle>
    </GameOfLifeContainer>
  );
};

export default GameOfLife;
