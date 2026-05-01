import Head from "next/head";
import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices/index";
import state from "../.slicemachine/libraries-state.json";

const SliceSimulatorPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <SliceSimulator
        sliceZone={({ slices }) => (
          <SliceZone slices={slices} components={components} />
        )}
        state={state}
      />
    </>
  );
};

export default SliceSimulatorPage;
